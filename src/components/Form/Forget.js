import React from "react";
import BaseComponent from '../BaseComponent';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import has from "lodash/has";

class Forget extends BaseComponent {
  constructor(props) {
    super();
    this.variant = 'danger';
    this.state.email = '';
  }

  afterSubmit(response){
    if(has(response, 'errors')){
      return this.setError(response.errors);
    }
    this.variant = 'success';
    let _this = this;
    this.setError(['New password sent to your email id']);
    setTimeout(() => {
      return _this.redirect('login');
    }, 3000);
  }
  
  render() {
    return (
      <div className="main-container">
        <Container fluid>

        <Row className="form pt-5">

            {/* <Col md={{ span: 4, offset: 5 }} className="overflow-hidden color-primary">
              Please enter your registered Email id to reset password.
            </Col> */}

            <Col md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }} className="overflow-hidden">
              <h6 className="form-title">Forget Password</h6>
            </Col>

            <Col md={4} xl={3}>

              <Form data-action="forgot" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>

                <Form.Group controlId="formemail">
                    <Form.Control name="email" type="email" onChange={this.onChange} value={this.state.email} placeholder="Please enter your registered Email id" required/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={this.state.disabled} block>
                  {this.state.disabled?'Loading...':'Send'}
                </Button>
              </Form>
              
              {this.getError(this.variant)}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Forget;