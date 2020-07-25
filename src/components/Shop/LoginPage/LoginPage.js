import BaseComponent from '../../BaseComponent';
import React from "react";
import "./custom.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";


class LoginPage extends BaseComponent {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="main-container">
        <Container fluid className="gray">
          <Row>
            <Col lg={8} className="border-primary">
              <h6 className="bg-info p-3 text-white">LOGIN OR SIGNUP</h6>
              <section className="d-sm-flex justify-content-around my-auto bg-light">
                <div className="m-3 p-2">
                  <p>Enter Email/Mobile number</p>
                  <input className="bb" type="text" id="" required />
                  <br /><br />
                  <Button variant="secondary" ><a href="/checkout">Continue</a></Button>
                </div>

                <div className="p-2">
                  <h5>Advantages of our secure login</h5>
                  <p className="border-bottom mt-3">1. Easily Track Orders, Hassle free Returns</p>
                  <p className="border-bottom mt-3">2. Get Relevant Alerts and Recommendation</p>
                  <p className="border-bottom mt-3">3. Wishlist, Reviews, Ratings and more</p>
                </div>
              </section>
              <p className="shadow p-3 mt-3 bg-light rounded ">2. Delivery Address</p>
              <p className="shadow p-3 mt-3 bg-light rounded">3. Order Summary</p>
              <p className="shadow p-3 mt-3 bg-light rounded">4. Payment Options</p>
            </Col>
            <Col lg={4} className="p-3">
              <p>
                Safe and Secure Payments. Easy returns.
                <br />
                100% Authentic products
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(LoginPage);
