import React from "react";
import BaseComponent from '../BaseComponent';
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import has from "lodash/has";
import { Link } from "react-router-dom";

class Login extends BaseComponent {
  constructor(props) {
    super();
    this.state.name = '';
    this.state.email = '';
    this.state.password = '';
    this.state.password_confirmation = '';
  }

  afterSubmit(response){
    if(has(response, 'errors')){
      return this.setError(response.errors);
    }
    return this.props.history.push('/login');
  }
  
  render() {
    return (
      <div className="main-container">
        <Container fluid className="gray">
          <Row>
            <Col md={8} className="border-primary m-auto">
              <h6 className="bg-info p-3 text-white">SIGNUP</h6>

              <Card className="my-2">
                <Card.Body>
                    <Form data-action="register" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                        <h3>Register</h3>
                        <Form.Group controlId="formname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Name" required autoFocus/>
                        </Form.Group>

                        <Form.Group controlId="formemail">
                            <Form.Label>Email id</Form.Label>
                            <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email id" required/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group controlId="formcPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" name="password_confirmation" onChange={this.onChange} value={this.state.password_confirmation} placeholder="Confirm Password" required/>
                        </Form.Group>

                        <Form.Group>
                          {this.getError()}
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" disabled ={this.state.disabled}>
                            Register
                        </Button>
                    </Form>
                </Card.Body>
              </Card>

              <section className="d-sm-flex justify-content-around my-auto bg-light">
                <div className="m-3 p-2">
                  <p>Already have an account?</p>
                  <Link className="btn btn-secondary" to='/login'>Login</Link>
                </div>

              </section>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;