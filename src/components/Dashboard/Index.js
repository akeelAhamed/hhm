import React from "react";
import BaseComponent from '../BaseComponent';
import { Button, Container, Card, Row, Col } from "react-bootstrap";

export default class Index extends BaseComponent {
  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="main-container">
        <Container fluid className="gray">
          <Row>
            <Col md={8} className="border-primary m-auto">
              <h6 className="bg-info p-3 text-white">You are loggedin</h6>

              <Card>
                <Card.Body>
                  <h2>Welcome {this.state.user.email}</h2>
                  <Button onClick={this.logOut}>Logout</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}