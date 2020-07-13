import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <img className="img-fluid" src={require('../HomePage/Img/first.jpg')}/>
          </Col>
          <Col>
          <img className="img-fluid" src={require("../AboutUs/img/santosh-verma-us6C9t4wz_U-unsplash(1).jpg")}/>
          </Col>
        </Row>

        <Row>
          <Col>
          <img className="img-fluid" src={require('../HomePage/Img/first.jpg')}/>
          </Col>
          <Col className="bg-success">

          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
