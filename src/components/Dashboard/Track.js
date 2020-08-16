import React from "react";
import BaseComponent from '../BaseComponent';
import './custom.css';
import { Button, Container, Row, Col, Spinner } from "react-bootstrap";

export default class Track extends BaseComponent {
  constructor(props) {
    super();
    this.state.track  = (props.location.search !== '')?props.location.search.replace('?', '').split('-'):['', ''];
  }


  content() {
    return (
      <>
        <div className="d-block w-100">
            <h5 className="header color-primary text-uppercase">Order: <u>{decodeURI(this.state.track[0])}</u>{' is ' +decodeURI(this.state.track[1])}</h5>
            <div className="card-track">
                <div className="">
                    <ul id="progressbar" className="text-center">
                        <li className="active step">In warehouse</li>
                        <li className="active step">In transit</li>
                        <li className="step">Redy for delivery</li>
                        <li className="step">Shipped</li>
                    </ul>
                </div>
            </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="main-container">
        <Container fluid>
          <Row>
            <Col md={12} className="border-primary m-auto">
              <Button size="sm" variant="link" className="logout text-light" onClick={this.logOut}>Logout</Button>
              <div className="center">
                {this.state.profile === null?<Spinner animation="border" variant="info"/>:this.content()}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}