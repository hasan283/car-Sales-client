import React from 'react';

const TotalOrder = ({ order, index }) => {
    const { parts, quantity, address } = order;
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{parts.slice(0, 10)}</td>
                <td>{quantity}</td>
                <td>{address}</td>
            </tr>
        </>
    );
};

export default TotalOrder;