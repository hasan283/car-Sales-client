import React from 'react';
import { toast } from 'react-toastify';
import useParts from '../../../../hooks/useParts';
import './DeleteProducts.css'

const DeleteProducts = () => {
    const [parts, setParts] = useParts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            const url = `http://localhost:5000/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining);
                    toast('Your Product Deleted Success!')
                })
        }
    }
    return (
        <div className='pt-5 mt-5'>
            <h1 className='text-center'>Total Parts : {parts.length}</h1>

            <div className="container">
                <div className="parts mt-5">
                    {
                        parts.map(part => <div key={part._id}>
                            <div className='delete-parts'>
                                <img src={part.img} alt="" />
                                <div className="parts-info">
                                    <h4>{part.name}</h4>
                                    <p><b>Description: </b>{part.description}</p>
                                    <p><b>Quantity: </b>{part.quantity}</p>
                                    <h4>${part.price}</h4>
                                </div>
                                <button onClick={() => handleDelete(part._id)}>Delete Product</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DeleteProducts;