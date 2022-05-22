import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Sheard/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error.message}</p>;

    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register')
    }


    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4 className='text-center mb-5'>Please Login</h4>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <center>
                            {errorElement}
                            <button className='btn bg-dark text-white px-5'>Login</button>
                        </center>
                    </Form>

                    <p className='pt-5'>Are you new here? <span onClick={navigateRegister} className='text-danger' style={{ cursor: 'pointer' }}>Please Register</span></p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;