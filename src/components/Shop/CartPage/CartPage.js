import React from "react";
import BaseComponent from '../../BaseComponent';
import "./custom.css";
import { Row, Col, Container, Button, ButtonGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CartPage extends BaseComponent {
  constructor(props) {
    super();

    this.state.promo = '';
    this.state.discount = 0;
    this.cart = this.getCart();

    this.edit = this.edit.bind(this);
  }

  /**
   * Go back to edit
   * 
   * @param {object} e 
   */
  edit(e){
    return this.redirect('item/'+this.cart.slug);
  }

  content() {
    if(this.cart === ''){
      return (
          <div className="main-container">
              <Container fluid>
                  <Row className="justify-content-center pt-3" style={{height: '70vh'}}>
                      <Col sm={6} className="m-auto text-center">
                          <section className="p-1">
                              <img className="img-fluid d-block" src={require("../img/emptycart.png")} alt="cart is empty" />
                              <strong>Your cart is empty</strong>
                              <Link to="/products" className="btn btn-info d-block">Shop now</Link>
                          </section>
                      </Col>
                  </Row>
              </Container>
          </div>
      );
    }

    this.cart.ship = this.cart.ship === null?0:0

    return (
      <div className="main-container p-5">
        <Container fluid className="contr-width">
          <h2 className="border_teal-left" >Shopping Bag</h2>
          <Row className="">
            <Col md="6" sm="12">
              <h5 className="border_teal-bottom">{this.cart._qty} items</h5>
              <section className="d-flex flex-lg-row flex-xl-row flex-md-row flex-sm  p-2">
                <img
                  className="img-fluid p-3 image m-auto"
                  src={this.cart.photo}
                  alt={this.cart.name}
                />
                <div className="my-auto">
                  <h4>{this.cart.name}</h4>
                  <p>Qty: {this.cart._qty}</p>
                  <ButtonGroup>
                    <Button variant="link" className="text-dark border-right" onClick={this.edit}>Edit</Button>
                    <Button variant="link" className="text-dark" onClick={this.emptyCart}>Remove</Button>
                  </ButtonGroup>
                </div>
              </section>
            </Col>

            <Col md="1"></Col>

            <Col md="5" sm="12">
              <h4 className="border_teal-bottom">Order summary</h4>
              <FormControl className="text-center" aria-label="Promo code" placeholder='Have a promo code...' value={this.state.qty} name="promo" onChange={this.onChange} />

              <p>Merchandise: <span className="float-right"> Rs.{this.cart.price}</span> </p>
              <p>Quantity   : <span className="float-right"> {this.cart._qty}x</span> </p>
              <p>Estimated shipping: <span className="float-right"> Rs.{this.cart.ship}</span></p>
              <h4 className="border-top pt-3">ORDER TOTAL<span className="float-right">Rs.{parseFloat(this.cart.ship + (this.cart.price * this.cart._qty) - this.state.discount)}</span></h4>

              {
                (!this.state.isLoggedIn)
                ?<Link className="mt-1 btn btn-primary" to="/login?checkout">Login & Buy</Link>
                :<Link className="mt-1 btn btn-primary" to="/checkout">PROCEED TO CHECKOUT</Link>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}