import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './PartsInfo.css';

const PartsInfo = ({ part }) => {
    const { name, img, description, price, quantity } = part;
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
                    <Link to='/buy'><button>Buy Now</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PartsInfo;