import BaseComponent from '../BaseComponent';
import React from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends BaseComponent {
  constructor(props) {
    super();
    this.state = {
        userid  : '',
        password: '',
    }
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
                        <Form.Group controlId="formUserid">
                            <Form.Label>Mobile number/Email id</Form.Label>
                            <Form.Control type="text" name="userid" onChange={this.onChange} value={this.state.userid} placeholder="Enter mobile number/Email id" required autoFocus/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Register
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