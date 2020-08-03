import React from "react";
import BaseComponent from '../BaseComponent';
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends BaseComponent {
  constructor(props) {
    super();
    this.state.email = '';
    this.state.password = '';
  }

  afterSubmit(param){
    console.log(param);
  }

  render() {
    return (
      <div className="main-container">
        <Container fluid className="gray">
          <Row>
            <Col md={8} className="border-primary m-auto">
              <h6 className="bg-info p-3 text-white">LOGIN</h6>

              <Card>
                <Card.Body>
                    <Form data-action="login" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                        <h3>Login</h3>
                        <Form.Group controlId="formemail">
                            <Form.Label>Email id</Form.Label>
                            <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email id" required autoFocus/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" disabled ={this.state.disabled}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
              </Card>

              <section className="d-sm-flex justify-content-around my-auto bg-light">
                <div className="m-3 p-2">
                  <p>Dont have an account?</p>
                  <Link className="btn btn-secondary" to='/register'>Register</Link>
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