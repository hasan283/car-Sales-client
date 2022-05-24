import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0yBRCxPk8JEPa4HAid8BV5etF88eIhJZYuSC9JNaxE8OhqWusjHbXquZSJo2sbBB975pYSXGhkvNH2qNShESpJ00UJz7HonU');

const Payment = () => {
    const { id } = useParams();
    const url = `https://obscure-fortress-38464.herokuapp.com/order/${id}`;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container pt-5 pb-5'>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="parts-info p-2 rounded text-center shadow-lg">
                        <h4 className="text-center">{orders._id}</h4>
                        <p><b>Email: </b>{orders.email}</p>
                        <p><b>Quantity: </b>{orders.quantity}</p>
                        <h4>${orders.price}</h4>
                        <Link style={{ textDecoration: 'none' }} to='/dashboard'><button className='bg-primary px-5 py-2 border-0 rounded text-white mt-5'>Cancel Now</button></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div style={{ height: '262px' }} className="parts-info p-2 rounded shadow-lg">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orders={orders} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;