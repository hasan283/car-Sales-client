import React from 'react';
import { useForm } from "react-hook-form";

const ManageProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='pt-5 mt-5'>

            <div className="container pb-4">
                <h4 className='py-3'>Add A Product!</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-3">
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                    </div>
                    <div className="mt-3">
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <div className="mt-3">
                        <input type="number" {...register("age", { min: 18, max: 99 })} />
                    </div>
                    <input className='mt-4' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default ManageProducts;