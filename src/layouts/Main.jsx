import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNAv from "../Pages/Shared/LeftNav/LeftNAv";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
        <Header></Header>
        <h1>This is main</h1>
        <Container>
            <Row>
            <Col lg>
                <LeftNAv></LeftNAv>
            </Col>
            <Col lg>
                <h2>Main Content</h2>
            </Col>
            <Col lg>
                <RightNav></RightNav>
            </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
  );
};

export default Main;
<h1>This is main</h1>;
