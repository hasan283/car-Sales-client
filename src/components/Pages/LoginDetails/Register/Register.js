import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Sheard/Loading';
import useToken from '../../../../hooks/useToken';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>;

    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    if (token) {
        navigate(from, { replace: true });
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
                            {errorElement}
                            <button
                                className='btn bg-dark text-white px-5'>Register</button>
                        </center>
                    </Form>

                    <p className='pt-5'>You Have an Account? <span onClick={navigateLogin} className='text-danger' style={{ cursor: 'pointer' }}>Please Login</span></p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;