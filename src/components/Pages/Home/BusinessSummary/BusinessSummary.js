import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faServer, faRectangleList, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import './BusinessSummary.css'
const BusinessSummary = () => {
    return (
        <div className='pt-5 mt-5 business-container'>
            <div className="container">
                <div className="title">
                    <h1 style={{ color: '#f6621b' }} className="text-center fs-bold">Our Business Summary</h1>
                    <p className='fs-5 text-center'>Our business is best business in the world. It is very beautiful manufacturer Website. We are the best in all services. We offer our best service anywhere in the world.</p>
                </div>
                <div className="sat-container">
                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-6 mt-5">
                            <div className="sat text-center">
                                <div className="icon text-center">
                                    <FontAwesomeIcon style={{ fontSize: '50px', color: '#fff' }} icon={faServer} />
                                </div>
                                <div className="pt-3 text-white">
                                    <span className='fs-4'>100+</span>
                                    <h4><b>Customers</b></h4></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 mt-5">
                            <div className="sat text-center">
                                <div className="icon text-center">
                                    <FontAwesomeIcon style={{ fontSize: '50px', color: '#fff' }} icon={faUser} />
                                </div>
                                <div className="pt-3 text-white">
                                    <span className='fs-4'>120M+</span>
                                    <h4><b>Customers</b></h4></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 mt-5">
                            <div className="sat text-center">
                                <div className="icon text-center">
                                    <FontAwesomeIcon style={{ fontSize: '50px', color: '#fff' }} icon={faRectangleList} />
                                </div>
                                <div className="pt-3 text-white">
                                    <span className='fs-4'>33k+</span>
                                    <h4><b>Annual Revenue</b></h4></div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 mt-5">
                            <div className="sat text-center">
                                <div className="icon text-center">
                                    <FontAwesomeIcon style={{ fontSize: '50px', color: '#fff' }} icon={faUsersViewfinder} />
                                </div>
                                <div className="pt-3 text-white">
                                    <span className='fs-4'>50+</span>
                                    <h4><b>Reviews</b></h4></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;