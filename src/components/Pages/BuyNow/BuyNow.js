import React from 'react';
import { useParams } from "react-router-dom";
const BuyNow = () => {
    const { buyNowId } = useParams();
    return (
        <div>
            <h1>WelCome {buyNowId}</h1>
        </div>
    );
};

export default BuyNow;