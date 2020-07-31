import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class NotFound extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="main-container center">
        <Container fluid>
          <Row className="my-auto">
            <Col lg xl md sm="auto" className="my-auto">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <h3>404 page not found <a href="#" onClick={this.back}>Go back</a></h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
