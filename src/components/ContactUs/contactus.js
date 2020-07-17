import React, { Component } from "react";
import "./custom.css";
import { Col, Form } from "react-bootstrap";

class ContactUs extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="bg-image">
          <h3>Higher living</h3>
        </div>

        <section>
          <form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          </form>
        </section>
      </div>
    );
  }
}

export default ContactUs;
