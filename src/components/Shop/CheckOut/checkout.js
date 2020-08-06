import BaseComponent from '../../BaseComponent';
import React from 'react';
import './custom.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CheckOut extends BaseComponent {
    constructor(props) {
        super();

        this.cart = this.getCart();
    
        if(this.cart !== ''){
            this.cart.ship = this.cart.ship === null?0:0
            let options = {
                "key": "rzp_test_xlJRG5Yh7YBbXa",
                "amount": parseFloat((this.cart.ship + this.cart.price) * 1), // 100 paise = INR 1, amount in paisa
                "name": "Merchant Name",
                "description": "Purchase Description",
                "handler": function (response){
                    console.log(response);
                },
                "prefill": {
                    "name": "user name",
                    "email": "user@email.com",
                    "contact": 123456789
                },
                "notes": {
                "address": "my address"
                },
            };
    
            this.rzp = new window.Razorpay(options);
            this.chekout = this.chekout.bind(this);
        }
        console.log(this.cart, this.state);
    }
    
    /**
     * Checkout
     * @param {object} e 
     */
    chekout(e){
    this.rzp.open();
    }

    content() {
        if(!this.state.isLoggedIn){
            return (
                <div className="main-container">
                    <h1 className="bg-info p-2 text-info">1</h1>
                    <Container fluid>
                        <Row className="center">
                            <Col sm={6} className="m-auto text-center">
                                <section className="p-1">
                                    <img className="img-fluid d-block" src={require("../img/emptycart.png")} alt="cart is empty" />
                                    <strong>You are not logged in. Login to see cart</strong>
                                    <Link to="/login" className="btn btn-info d-block">Login</Link>
                                </section>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }else if(this.cart === ''){
            return (
                <div className="main-container">
                    <h1 className="bg-info p-2 text-info">1</h1>
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

        return (
            <div className="main-container">
                <h1 className="bg-info p-2 text-info">1</h1>
                <Container fluid>
                    <Row className="justify-content-center pt-3">
                        <Col sm={6} xl={4} md={6} lg={4}>
                            <h2>SHOPPING CART</h2>
                            <p>Back to store</p>
                            <section className="border border-left-0 border-right-0">

                                <div className="d-flex">
                                    <img className="img-fluid w-25 pt-1" alt='product' src={this.cart.thumbnail} />
                                    <div className="m-auto">
                                        <p>1 item</p>
                                        <select className="border-0 text-info">
                                            <option>More info</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <p>Subtotal<span className="float-right"> ${this.cart.price}</span></p>
                                    <p>Shipping<span className="float-right"> ${this.cart.ship}</span></p>
                                    <h4>TOTAL <span className="float-right">${parseFloat(this.cart.ship + this.cart.price)}</span></h4>
                                </div>
                            </section>
                        </Col>

                        <Col sm={6} xl={4} md={6} lg={4}><h2>CHECKOUT</h2>
                            <section className="border border-left-0 border-right-0">
                                <ul className="udetails">
                                    <li>Email<br /><small>{this.state.user.email}</small></li>
                                    <li>Contact<br /><small>johnjoe | +91 9880454789</small></li>
                                    <li>Pickup Information <br /><small> Local Pickup</small></li>
                                </ul>
                            </section>

                            <section className="p-1">
                                <strong>Payment Information</strong>
                                <p>Choose a way to pay for your order:</p>

                                <div className="border p-2">
                                    <input type="radio" id="razor" name="razor" value="razor" checked readOnly/>
                                    <label className="pl-2" htmlFor="razor">Pay with razorpay</label><br />
                                </div>

                                <h6 className="pt-2">Policy</h6>
                                <small dangerouslySetInnerHTML={{ __html: this.cart.policy }}/>
                                <Button className="mb-4 mt-2" variant="info" block onClick={this.chekout}>Place Order</Button>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    render(){
        return (!this.state.pageLoaded)?this.prePage():this.content();
    }

}