import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                        navigate('/login');
                    }

                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user]);

    // Delete Order 
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    toast('Your Order Deleted Success!')
                })
        }
    }


    return (
        <div className='container pt-5'>
            <h3 className='text-center pb-5'>My Order: {orders.length}</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parts Name</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Manage Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.parts.slice(0, 10)}</td>
                            <td>{order.quantity}</td>
                            <td>{order.address}</td>
                            <td>
                                <button onClick={() => handleOrderDelete(order._id)} className='border-0 rounded bg-danger fw-bold text-white'>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;