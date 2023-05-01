import React, { useContext } from "react";
import './NavigationBar.css'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvide";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const {user}=useContext(AuthContext);
  const {name}=user;

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
               <Link to='/'>Home</Link>
               <Link className="ms-2" to='/'>About</Link>
               <Link className="ms-2" to='/'>Career</Link>
            </Nav>
            <Nav className="my-auto d-flex align-items-center">
              {
                name && <span> {name} </span>
              }
               <Link className="ms-2" to='/'><span className="profileName"> <FaUserCircle/> </span></Link>
               <Link className="ms-2" to={'/login'}> <Button variant="secondary">Login</Button> </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
