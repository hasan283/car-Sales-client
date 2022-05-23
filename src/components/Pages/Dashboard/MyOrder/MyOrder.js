import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import TotalOrder from './TotalOrder';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user])
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
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <TotalOrder
                            key={order._id}
                            order={order}
                            index={index}></TotalOrder>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;