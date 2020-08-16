import React from "react";
import BaseComponent from '../BaseComponent';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import has from "lodash/has";
import { Link } from "react-router-dom";

class Login extends BaseComponent {
  constructor(props) {
    super();
    this.state.email = '';
    this.state.password = '';

    if(this.state.isLoggedIn){
      window.location.href = 'dashboard';
    }

    this.afterSubmit = this.afterSubmit.bind(this);
  }

  afterSubmit(response){
    if(has(response, 'error')){
      return this.setError(response.error);
    }
    response.email = this.state.email;
    const { location: { search } } = this.props;
    return this.login(response, search.replace('?', ''));
  }

  render() {
    if(this.state.isLoggedIn){
      return(<div className="main-container"></div>)
    }
    return (
      <div className="main-container">
        <Container fluid>
          <Row className="form pt-5">
            <Col md={{ span: 2, offset: 3 }}>
              <h3 className="form-title">Login</h3>
            </Col>

            <Col md={4} xl={3}>
                <Form data-action="login" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                  <Form.Group controlId="formemail">
                      <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email id" required autoFocus/>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                      <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required/>
                  </Form.Group>

                  <Link className="d-block py-2 btn-link text-dark" to='/forget'>Forget password?</Link>
                  
                  <Button variant="primary" type="submit" disabled={this.state.disabled} block>
                    {this.state.disabled?'Loading...':'Login'}
                  </Button>
                </Form>

                {this.getError()}
                
                <div className="p-2 d-block w-100">
                  <Link className="btn btn-link text-dark float-right" to='/register'>REGISTER</Link>
                  <span className="mt-2 d-block">Dont have an account?</span>
                </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;