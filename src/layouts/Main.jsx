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
            <Col lg={3}>
                <LeftNAv></LeftNAv>
            </Col>
            <Col lg={6}>
                <Outlet></Outlet>
            </Col>
            <Col lg={3}>
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
