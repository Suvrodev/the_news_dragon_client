import React from "react";
import './NavigationBar.css'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
               <Link to='/'>Home</Link>
               <Link to='/'>About</Link>
               <Link to='/'>Career</Link>
            </Nav>
            <Nav className="my-auto  d-flex align-items-center">
               <Link to='/'><span className="">Profile</span></Link>
               <Link> <Button variant="secondary">Login</Button> </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
