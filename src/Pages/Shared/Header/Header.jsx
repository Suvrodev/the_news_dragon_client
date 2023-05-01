import React, { useContext } from 'react';
import headerLogo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavigationBar from '../NavigationBar/NavigationBar';
import { AuthContext } from '../../../Providers/AuthProvide';
const Header = () => {

 
    return (
        <Container >
            <div className='text-center mt-5'>
            <img src={headerLogo} alt="" />
            <p className='text-secondary' ><small>Journalism Without Fear or Favor</small></p>
            <p className='text-success fw-bold'> {moment().format('dddd, D MMMM  YYYY')} </p>
            </div>
            

            <div className='d-flex bg-success text-white p-2 rounded-2'>
                <Button variant="danger">Latest</Button>
                <span className='ms-4 fw-bold my-auto' > <Marquee speed={100}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee> </span>
            </div>

            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;