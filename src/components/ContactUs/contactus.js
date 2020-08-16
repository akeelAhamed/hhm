import BaseComponent from '../BaseComponent';
import React from "react";
import "./custom.css";
import { Col, Form, Button, Row } from "react-bootstrap";

class ContactUs extends BaseComponent {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className="main-container ">
        <div className="bkgcontact text-uppercase">
          <h3 className="bkg-text">Higher living</h3>
        </div>

        <section className="m-auto px-5 w-75">
          <h2 className="mt-5 border-teal">Contact Us</h2>
          <form className="pt-5 pform bg-light mx-3" onSubmit={this.onSubmit}>
            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  placeholder="YOUR NAME (REQUIRED)" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMail">
                <Form.Control
                  type="email"
                  placeholder="YOUR MAIL(REQUIRED)" required />
              </Form.Group>

            </Form.Row>

            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridSubject">
                <Form.Control
                  type="text"
                  placeholder="SUBJECT" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Control 
                  type="number"
                  placeholder="YOUR PHONE" />
              </Form.Group>
            </Form.Row>

            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridmessage">
                <Form.Control
                  placeholder="Your message"
                  as="textarea" rows="3" />
                <Button className="m-3" variant="dark">Send</Button>
              </Form.Group>

            </Form.Row>
          </form>
        
          <Row className="my-auto">
            <Col lg xl md sm="auto" className="my-auto">
              <h3 className="text-uppercase">India Office</h3>
              <ul className="list-unstyled  mt-3">
                <li>HHM World</li>
                <li>Door No, 12/524-B</li>
                <li>Kayiliad Post</li>
                <li>Chalavara Grama</li>
                <li>Panchayat, Palakkad District</li>
                <li>Kerala, 679122</li>
              </ul>
            </Col>
            <Col sm="auto" className="pb-3">
              <img className="img-fluid w-75" src={require('../VisionPage/img/map.png')} alt="map" />
            </Col>
          </Row>

        </section>
      </div>
    );
  }
}

export default ContactUs;