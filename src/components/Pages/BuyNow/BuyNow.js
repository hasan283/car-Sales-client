import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import useBuyNow from '../../../hooks/useBuyNow';
const BuyNow = () => {
    const { buyNowId } = useParams();
    const [parts, setParts] = useBuyNow(buyNowId);
    const increaseQuantity = id => {

    }
    const reduceQuantity = id => {

    }
    return (
        <div className='container mb-5'>


            <div className="pb-5">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="parts-info pt-5">
                            <h4>Parts Name: {parts.name}</h4>
                            <p><b>Description:</b> {parts.description}</p>
                            <h6><b>Quantity:</b> {parts.quantity}</h6>
                            <h4 className='pt-3'>${parts.price}</h4>
                        </div>
                        <div className="d-flex justify-content-left align-items-center button mt-5">
                            <div>
                                <Link to={`/order/${buyNowId}`}><button>Order Now</button></Link>
                            </div>
                            <div className='px-2'>
                                <button onClick={() => increaseQuantity}>Increase Quantity</button>
                            </div>
                            <div>
                                <button onClick={() => reduceQuantity}>Reduce Quantity</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img style={{ maxWidth: '100%' }} src={parts.img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BuyNow;