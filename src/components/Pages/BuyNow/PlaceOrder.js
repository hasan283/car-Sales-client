import React from 'react';
import { useParams } from 'react-router-dom';
import useBuyNow from '../../../hooks/useBuyNow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const { buyNowId } = useParams();
    const [parts, setParts] = useBuyNow(buyNowId);
    const [user] = useAuthState(auth);



    const handelOrder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            parts: parts.name,
            buyNowId: buyNowId,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
            address: event.target.address.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order Submitted successfully!');
                    event.target.reset();
                }
            })
    }

    const quantityChange = event => {
        console.log(event.target.value)
        const { quantity, ...rest } = parts;
        const newQuantity = event.target.value;
        const newUser = { quantity: newQuantity, ...rest };
        setParts(newUser);
    }
    const priceChange = event => {
        console.log(event.target.value)
        const { price, ...rest } = parts;
        const newPrice = event.target.value;
        const newUser = { price: newPrice, ...rest };
        setParts(newUser);
    }

    return (
        <div className='container py-5 my-5'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4 className="text-center mb-5">Order Now: {parts.name}</h4>
                    <form onSubmit={handelOrder}>
                        <input className='w-100 fw-bold mt-3 py-2 px-2' type="text" name="name" value={user?.displayName} placeholder='Your Name' required disabled />

                        <input className='w-100 fw-bold mt-3 py-2 px-2' type="email" name="email" value={user?.email} placeholder='Your Email' required disabled />

                        <input className='w-100 fw-bold mt-3 py-2 px-2' type="text" name="parts" value={parts.name} placeholder='Parts Name' required disabled />

                        <input className='w-100 mt-3 py-2 px-2' type="number" name="quantity" placeholder='Quantity' onChange={quantityChange} value={parts.quantity} required />
                        <input className='w-100 mt-3 py-2 px-2' type="number" name="price" placeholder='Price' onChange={priceChange} value={parts.price} required />

                        <input className='w-100 mt-3 mb-3 py-2 px-2' type="number" name="phone" placeholder='Your Phone Number' required />
                        <input className='w-100 mt-3 mb-3 py-2 px-2' type="text" name="address" placeholder='Your Address' required />

                        <center>
                            <input className='bg-dark text-white px-5 py-2 border-0 rounded' type="submit" value="Order Now" />
                        </center>
                    </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default PlaceOrder;