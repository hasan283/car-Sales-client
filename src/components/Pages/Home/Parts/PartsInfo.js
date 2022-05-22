import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './PartsInfo.css';

const PartsInfo = ({ part }) => {
    const { _id, name, img, description, price, quantity } = part;
    const navigate = useNavigate()
    const navigateBuyNow = id => {
        navigate(`/buyNow/${id}`);
    }
    return (
        <div className='parts-info mt-5 pt-5'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <p><b>Quantity: </b>{quantity}</p>
                        <h4>${price}</h4>
                    </Card.Text>
                    <button onClick={() => navigateBuyNow(_id)}>Buy Now</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PartsInfo;