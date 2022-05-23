import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from "react-router-dom";
import auth from '../../../../firebase.init';
import google from '../../../image/socialIcon/google.png';
import github from '../../../image/socialIcon/github.png';
import useToken from '../../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error.message}</p>;

    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mb-5'>

            <div className="container mb-5">
                <div className='d-flex justify-content-center align-items-center'>
                    <p style={{ width: "100%", height: '2px', background: '#000' }}></p>
                    <p className='px-2' style={{ fontSize: '20px' }}><b>or</b></p>
                    <p style={{ width: "100%", height: '2px', background: '#000' }}></p>
                </div>
                {errorElement}
                <center>
                    <div className=''>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='d-flex justify-content-center align-items-center border-0 bg-dark text-white py-2 px-5 rounded'>
                            <img src={google} alt="" />
                            <h6>Google login</h6>
                        </button>
                        {/* <button className='d-flex justify-content-center align-items-center border-0 bg-info text-white py-2 px-5 mt-3 rounded'>
                            <img src={github} alt="" />
                            <h6>Github login</h6>
                        </button> */}
                    </div>
                </center>
            </div>

        </div>
    );
};

export default SocialLogin;