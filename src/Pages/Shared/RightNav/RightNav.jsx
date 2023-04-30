import React from "react";
import './RightNav.css'
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bgp from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>{" "}
      <br />
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <h3 className="mt-3">Find On Us</h3>
      <ListGroup className="text-sm-center text-lg-start">
        <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
        <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
        <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
      </ListGroup>

      <QZone></QZone>
      <div className="bg-primary d-flex flex-column justify-content-center align-items-center bgp" >
         <h4 className="text-white text-center fs-1">Create an Amazing Newspaper</h4>
         <p className="text-white text-center">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
         <Button variant="danger">Learn More</Button>{' '}
         {/* <img src={bgp} alt="" /> */}
      </div>
    </div>
  );
};

export default RightNav;
