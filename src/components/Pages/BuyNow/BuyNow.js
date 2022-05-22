import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const BuyNow = () => {
    const { buyNowId } = useParams();
    const [parts, setParts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/parts/${buyNowId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div>
            <h1>WelCome {parts.name}</h1>
        </div>
    );
};

export default BuyNow;