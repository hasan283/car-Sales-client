import React from 'react';
import banner from '../../../image/banner/banner.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-image">
                <img src={banner} alt="" />
                <div className="banner-info">
                    <div className="banner-content">
                        <div className="container">
                            <p>Find Auto Parts Fast</p>
                            <h1>Best quality</h1>
                            <h1 className='text-white'>for best price</h1>
                            <p className='mb-5'>This is our most comprehensive vehicle treatment</p>
                            <a href="#more">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;