import React, { Component } from "react";
import "./custom.css";
import { Row, Col, Container, Button } from "react-bootstrap";

class CartPage extends Component {
  render() {
    return (
      <div className="main-container">
        <Container fluid className="contr-width">
          <h2 className="border_teal-left" >Shopping Bag</h2>
          <Row className="">
            <Col xl lg md="6" sm="12">
              <h5 className="border_teal-bottom">2 items</h5>
              <section className="d-flex flex-lg-row flex-xl-row flex-md-row flex-sm  p-2">
                <img
                  className="img-fluid p-3 image m-auto"
                  src={require("../../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg")}
                  alt=""
                />
                <div className="my-auto">
                  <h4>Aushmath's PURE</h4>
                  <h4>(Pancea Ultimate for Rousing Energy)</h4>
                  <p>4GB RAM</p>
                  <p>Seller Rumadita Fashions</p>
                  <p>09,499 010,999 13% Off1 offer applied</p>
                  <p> Qty:-|2|+</p> 
                  <p>Edit | Remove</p>
                </div>
              </section>
            </Col>

            <Col xl lg md="6" sm="12">
              <h4 className="border_teal-bottom">Order summary</h4>
              <h5 className="border text p-3">HAVE A PROMO CODE</h5>
              
              <p>Merchandise: <p className="float-right"> $60,000/-</p> </p>
              <p>Estimated shipping: <p className="float-right"> Free</p></p>
              <h4 className="border-top pt-3">ORDER TOTAL<p className="float-right"> $60,000</p></h4>
            
              <Button className="mt-5" variant="info" block><a href="/loginpage">PROCEED TO CHECKOUT</a></Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CartPage;
