import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [Processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transitionId, setTransitionId] = useState('');
    const { _id, price, name, email } = orders;

    useEffect(() => {
        fetch('https://obscure-fortress-38464.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        setCardSuccess('');
        setProcessing(true);
        // conform Card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransitionId(paymentIntent.id)
            console.log(paymentIntent);
            setCardSuccess('Your Payment is Completed')
            // Store Payment All DataBase 
            const payment = {
                orders: _id,
                transitionId: paymentIntent.id
            }
            fetch(`https://obscure-fortress-38464.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(result => {
                    setProcessing(false);
                    console.log(result);
                })
        }
    }


    return (
        <>
            <form className='pt-5' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='text-white bg-dark' style={{ marginTop: '50px' }} type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-danger'>{cardError}</p>}
            {cardSuccess && <div className='text-primary'>
                <p>{cardSuccess}</p>
                <p>Your Transition Id <span className='text-dark'>{transitionId}</span></p>
            </div>}
        </>
    );
};

export default CheckoutForm;