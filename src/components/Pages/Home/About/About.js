import React from 'react';
import banner2 from '../../../image/banner/car2.jpg'
import './About.css';

const About = () => {
    return (
        <div className='about-container mt-5 pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6-col-sm-12 mt-5">
                        <div className="left-text">
                            <h1>AMP JUMP STARTER W/120 PSI COMPRESSOR</h1>
                            <p>Our business is best business in the world. It is very beautiful manufacturer Website. We are the best in all services. We offer our best service anywhere in the world.</p>
                            <h1 className='h1'><b>$18.79</b></h1>
                            <a href="#deals">Take Bundle Deals</a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6-col-sm-12 mt-5">
                        <div className="right">
                            <img src={banner2} alt="" />
                        </div>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default About;