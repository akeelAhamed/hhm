import React from "react";
import BaseComponent from '../BaseComponent';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import has from "lodash/has";
import { Link } from "react-router-dom";

class Login extends BaseComponent {
  constructor(props) {
    super();
    this.variant = 'danger';
    this.state.name = '';
    this.state.email = '';
    this.state.phone = '';
    this.state.password = '';
    this.state.password_confirmation = '';

    const { location: { search } } = props;
    this.after = search;
    this.onSubmitSelf = this.onSubmitSelf.bind(this);
  }

  afterSubmit(response){
    if(has(response, 'errors')){
      return this.setError(response.errors);
    }
    this.variant = 'success';
    let _this = this;
    this.setError(['Registered successfully']);
    setTimeout(() => {
      return _this.redirect('login'+this.after);
    }, 3000);
  }
  
  /**
   * Capture Submit event
   * @param {object} e 
   */
  onSubmitSelf(e){
    e.preventDefault();
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(this.state.phone.length !== 10){
      return this.setError(['Mobile number should be 10 digits.']);
    }else if(!regex.test(this.state.password)){
      return this.setError(['Password must contain Alpha-numeric, Uppercase and special characters(!@#$%^&*).']);
    }else if(this.state.password !== this.state.password_confirmation){
      return this.setError(['The password confirmation does not match.']);
    }
    return this.onSubmit(e);
  }

  render() {
    return (
      <div className="main-container">
        <Container fluid>

        <Row className="form pt-5">
            <Col md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 3 }} className="overflow-hidden">
              <h3 className="form-title">Register</h3>
            </Col>

            <Col md={4} xl={3}>

              <Form data-action="register" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmitSelf}>
                  <Form.Group controlId="formname">
                      <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Full Name" required autoFocus/>
                  </Form.Group>

                  <Form.Group controlId="formemail">
                      <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email id" required/>
                  </Form.Group>

                  <Form.Group controlId="formphone">
                      <Form.Control type="number" name="phone" onChange={this.onChange} value={this.state.phone} placeholder="Phone number" required/>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                      <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
                  </Form.Group>

                  <Form.Group controlId="formcPassword">
                      <Form.Control type="password" name="password_confirmation" onChange={this.onChange} value={this.state.password_confirmation} placeholder="Confirm Password" required/>
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={this.state.disabled} block>
                    {this.state.disabled?'Loading...':'Register'}
                  </Button>
              </Form>
              
              {this.getError(this.variant)}

            </Col>
          </Row>

          <Row className="my-5">
            <Col md={8}>
                <h4 className="mt-2 text-right color-primary">If you are an existing customer<br/>please login here with the<br/> HHM Username and Password</h4>
            </Col>
            <Col md={4} style={{alignItems: 'center',display: 'flex', borderWidth: 3}} className="border-teal1">
              <Link className="btn color-primary btn-link text-left" style={{fontSize: '1.5rem'}} to={'/login'+this.after}>LOGIN</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;