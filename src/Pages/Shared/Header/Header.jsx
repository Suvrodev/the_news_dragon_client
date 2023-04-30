import React from 'react';
import headerLogo from '../../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img src={headerLogo} alt="" />
            <p className='text-secondary' ><small>Journalism Without Fear or Favor</small></p>
            <p className='text-success fw-bold'> {moment().format('dddd, D MMMM  YYYY')} </p>
        </div>
    );
};

export default Header;