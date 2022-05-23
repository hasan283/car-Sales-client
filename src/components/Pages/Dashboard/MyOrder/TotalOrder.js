import React from 'react';
import { toast } from 'react-toastify';
import useOrder from '../../../../hooks/useOrder';

const TotalOrder = ({ order, index }) => {
    const { parts, quantity, address } = order;
    const [orders, setOrders] = useOrder();

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
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{parts.slice(0, 10)}</td>
                <td>{quantity}</td>
                <td>{address}</td>
                <td>
                    <button onClick={() => handleOrderDelete(order._id)} className='border-0 rounded bg-danger fw-bold text-white'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default TotalOrder;