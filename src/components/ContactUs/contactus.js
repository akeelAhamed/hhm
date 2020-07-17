import React, { Component } from "react";
import "./custom.css";
import { Col, Form,Button,Container,Row } from "react-bootstrap";

class ContactUs extends Component {
  render() {
    return (
      <div className="main-container ">
        <div className="bg-image">
          <h3>Higher living</h3>
        </div>

        <section className="mt-5">
          <form>
            <h2 className="text-center">Contact Us</h2>
            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control 
                className="border-1 border-top-0 border-left-1  border-right-0 rounded-0 border-bottom-secondary" 
                type="email" 
                placeholder="YOUR NAME (REQUIRED)" required />
              </Form.Group>

              <Form.Group as={Col}  controlId="formGridMail">
                <Form.Control className="border-1 border-top-0 border-left-1 border-right-0 rounded-0 border-bottom-secondary" 
                type="email" 
                placeholder="YOUR MAIL(REQUIRED)" required/>
              </Form.Group>
              
            </Form.Row>

            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridSubject">
                <Form.Control 
                className="border-1 border-top-0 border-left-1 border-bottom-1 border-right-0 rounded-0 border-info" 
                type="text" 
                placeholder="SUBJECT" required />
              </Form.Group>

              <Form.Group as={Col}  controlId="formGridPhone">
                <Form.Control className="border-1 border-top-0 border-left-1 border-bottom-1 border-right-0 rounded-0 border-info" 
                type="number" 
                placeholder="YOUR PHONE" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridSubject">
              <Form.Control 
                className="border-1 border-top-0 border-left-1 border-bottom-1 border-right-0 rounded-0 border-info mt-5 m-3" 
                type="text" 
                placeholder="SUBJECT" required />
                <Button className="m-3" variant="secondary">Send</Button>
              </Form.Group>
              
            </Form.Row>
          </form>
        </section>

        <Container fluid>
          <Row>
            <Col className="my-auto text-center">
              <h1 className="text-uppercase">India Office</h1>
              <ul className="list-unstyled  mt-3">
                <li>AUSHMATH Life Products Pvt Ltd</li>
                <li>Door No, 2/1, First Floor</li>
                <li>Devaraj Corner</li>
                <li>Marudhamalai main Road</li>
                <li>Vadavalli Coimbatore District</li>
                <li>Tamil Nadu. 641041</li>
              </ul>
            </Col>
            <Col className="text-center">
              <img className="img-fluid w-50" src={require('../VisionPage/img/lens.jpg')} alt=""/>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="my-auto text-center">
              <h1 className="text-uppercase">Malaysia Office</h1>
              <ul className="list-unstyled  mt-3">
                <li>AUSHMATH Life Products Pvt Ltd</li>
                <li>Door No, 2/1, First Floor</li>
                <li>Devaraj Corner</li>
                <li>Marudhamalai main Road</li>
                <li>Vadavalli Coimbatore District</li>
                <li>Tamil Nadu. 641041</li>
              </ul>
            </Col>
            <Col className="text-center">
              <img className="img-fluid w-50" src={require('../VisionPage/img/lens.jpg')} alt=""/>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default ContactUs;
