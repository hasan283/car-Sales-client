import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }

    const navigateLogin = () => {
        navigate('/login')
    }



    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4 className='text-center mb-5'>Please Register</h4>
                    <Form onSubmit={handleRegister}>

                        <Form.Group className="mb-3">
                            <Form.Control id='name' type="text" placeholder="Enter Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control id='email' type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control id='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <center>
                            <button className='btn bg-dark text-white px-5'>Register</button>
                        </center>
                    </Form>

                    <p className='pt-5'>You Have an Account? <span onClick={navigateLogin} className='text-danger' style={{ cursor: 'pointer' }}>Please Login</span></p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Register;