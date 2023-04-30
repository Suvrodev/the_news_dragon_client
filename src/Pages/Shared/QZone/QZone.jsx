import React from 'react';
import './QZone.css'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='qZone mt-4 p-3 rounded-3'>
            <h4 className='mb-5'>Q-Zone</h4>
           <div className='d-flex flex-column align-items-center'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default QZone;