import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import icon1 from '../../../image/flag/albania.png';
import icon2 from '../../../image/flag/argentina.png';
import icon3 from '../../../image/flag/australia.png';
import icon4 from '../../../image/flag/bangladesh.png';
import icon5 from '../../../image/flag/CapeVerde.png';
import icon6 from '../../../image/flag/usa.png';

const Reviews = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row">
                    <h1 style={{ color: '#f6621b' }} className="text-center fs-bold">User Reviews</h1>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon1} alt="" />
                            </center>
                            <h4>Alex Johan</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon2} alt="" />
                            </center>
                            <h4>Olina Meru</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfStroke} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon3} alt="" />
                            </center>
                            <h4>P.S. Puspa</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon4} alt="" />
                            </center>
                            <h4>P.S. Mahamud</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon5} alt="" />
                            </center>
                            <h4>Alina</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card text-center py-3">
                            <center>
                                <img src={icon6} alt="" />
                            </center>
                            <h4>M.K. Johan Ranga</h4>

                            <div style={{ color: 'gold' }} className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>Awesome Services</p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Reviews;