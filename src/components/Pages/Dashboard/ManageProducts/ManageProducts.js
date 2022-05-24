import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const ManageProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://obscure-fortress-38464.herokuapp.com/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Your Product Add Successfully!');
                console.log(result)
            })
    };
    return (
        <div className='pt-5 mt-5'>

            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h4 className='py-3'>Add A Product!</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-3">
                                <input className='w-100 py-2 px-2' {...register("name", { required: true })} placeholder="Parts Name" />
                            </div>
                            <div className="mt-3">
                                <input className='w-100 py-2 px-2' type="number" {...register("quantity")} placeholder="Quantity" required />
                            </div>
                            <div className="mt-3">
                                <input className='w-100 py-2 px-2' type="text" {...register("img")} placeholder="Photo URL" required />
                            </div>
                            <div className="mt-3">
                                <input className='w-100 py-2 px-2' type="number" {...register("price", { min: 18, max: 'auto' })} placeholder="Price" required />
                            </div>
                            <div className="mt-3">
                                <textarea className='w-100 py-2 px-2' {...register("description")} placeholder="Description" required />
                            </div>
                            <center>
                                <input className='mt-4 border-0 bg-dark text-white px-5 py-2 rounded' type="submit" value="Add Parts" />
                            </center>
                        </form>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12"></div>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;