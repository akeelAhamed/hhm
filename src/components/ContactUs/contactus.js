import React from "react";
import has from "lodash/has";
import { Col, Form, Button, Row } from "react-bootstrap";
import BaseComponent from '../BaseComponent';
import "./custom.css";

class ContactUs extends BaseComponent {
  constructor(props) {
    super();
    this.variant = 'danger';
    this.state.name = '';
    this.state.phone = '';
    this.state.email = '';
    this.state.subject = '';
    this.state.text = '';
  }

  afterSubmit(response){
    if(has(response, 'error')){
      return this.setError(response.error);
    }
    this.variant = 'success';
    this.setError([response.Staus]);
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  }
  
  render() {
    return (
      <div className="main-container ">
       <div className="ml-3 mr-3">
          <p className="b-absolute">HIGHER LIVING</p>
          <img className="img-fluid w-100" alt="banner" src='https://admin.hhmworld.com/assets/images/sliders/1599557871banner1.jpg' />
        </div>

        <section className="m-auto px-lg-5 w-75">
          <h2 className="mt-5 border-teal">Contact Us</h2>
          <form data-action="contact" data-method="post" data-callback="afterSubmit" className="pt-5 pform bg-light mx-md-3" onSubmit={this.onSubmit}>
            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  placeholder="YOUR NAME (REQUIRED)" name="name" onChange={this.onChange} value={this.state.name} required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMail">
                <Form.Control
                  type="email"
                  placeholder="YOUR MAIL(REQUIRED)" name="email" onChange={this.onChange} value={this.state.email} required />
              </Form.Group>

            </Form.Row>

            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridSubject">
                <Form.Control
                  type="text"
                  placeholder="SUBJECT" name="subject" onChange={this.onChange} value={this.state.subject} required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Control 
                  type="number"
                  placeholder="YOUR PHONE" name="phone" onChange={this.onChange} value={this.state.phone} />
              </Form.Group>
            </Form.Row>

            <Form.Row className="m-2">
              <Form.Group as={Col} controlId="formGridmessage">
                <Form.Control
                  placeholder="Your message"
                  as="textarea" name="text" onChange={this.onChange} value={this.state.text} rows="3" />

                  <Button className="m-3" variant="dark" type="submit" disabled={this.state.disabled}>
                    {this.state.disabled?'Loading...':'Send'}
                  </Button>

                  {this.getError(this.variant)}
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