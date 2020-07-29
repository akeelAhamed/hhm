import BaseComponent from '../BaseComponent';
import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

class Login extends BaseComponent {
  constructor(props) {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
  }
  
  onSubmit(event){
    event.preventDefault();
  }
  
  render() {
    return (
        <Container>
            <Card>
                <Card.Body>
                <Form onSubmit>
                    <h3>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="number" placeholder="Enter mobile number" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    );
  }
}

export default Login;