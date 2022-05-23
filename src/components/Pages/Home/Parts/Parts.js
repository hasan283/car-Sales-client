import React, { useEffect, useState } from 'react';
import banner3 from '../../../image/banner/banner-3.jpg'
import PartsInfo from './PartsInfo';
import './Parts.css'
import useParts from '../../../../hooks/useParts';

const Parts = () => {
    const [parts, setParts] = useParts();

    return (
        <div id='deals' className='pt-5'>

            <div id='more' className="parts-top pt-5">
                <img style={{ width: '100%' }} src={banner3} alt="" />
            </div>

            <div className="container">
                <div className="parts">
                    {
                        parts.map(part => <PartsInfo
                            key={part._id}
                            part={part}></PartsInfo>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Parts;