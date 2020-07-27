import BaseComponent from '../BaseComponent';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class NotFound extends BaseComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="main-container ">
        <Container fluid>
          <Row className="my-auto">
            <Col lg xl md sm="auto" className="my-auto">
                <h3>404 page not found</h3>
            </Col>
            <Col lg xl md sm="auto" className="text-center">
              <img className="img-fluid " src={require('../VisionPage/img/lens.jpg')} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
