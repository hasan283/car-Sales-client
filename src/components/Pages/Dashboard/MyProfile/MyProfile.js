import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './MyProfile.css'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
        navigate('/login');
        localStorage.removeItem('accessToken');
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="profile">
                        {/* <img src={user.photoURL} alt="profile" /> */}
                        <h4>Name: {user.displayName}</h4>
                        <p><b>Last Sign:</b> {user.metadata.lastSignInTime}</p>
                        <button className='border-0 bg-dark text-white rounded' onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12"></div>
            </div>

        </div>
    );
};

export default MyProfile;