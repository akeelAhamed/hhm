import React, {Component } from 'react';
import './custom.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class CheckOut extends Component {
    render(){
        return(
            <div className="main-container">
                <h1 className="bg-info p-2 text-info">1</h1>
                <Container fluid>
                    <Row className="justify-content-center pt-3">
                        <Col sm={6} xl={4} md={6} lg={4}>
                        <h2>SHOPPING CART</h2>
                        <p>Back to store</p>
                        <section className="border border-left-0 border-right-0">
                       
                        <div className="d-flex">
                            <img className="img-fluid w-25 pt-1" alt='' src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg')} />
                            <div className="m-auto">
                            <p>1 item</p>
                            <select className="border-0 text-info">
                                <option>More info</option>
                            </select>
                            </div>
                        </div>
                        <div className="p-2">
                            <p>Subtotal<p className="float-right"> $60,000</p></p>
                            <p>Shipping<p className="float-right"> $500</p></p>
                            <h4>TOTAL <h4 className="float-right">$60,500</h4></h4>
                        </div>
                        </section>
                        </Col>

                        <Col sm={6} xl={4} md={6} lg={4}><h2>CHECKOUT</h2>
                        <section className="border border-left-0 border-right-0">
                        <ul>
                            <li>Email<br/><small>johnjoe@gmail.com</small> <span className="pl-2 text-info">Change email</span></li>
                            <li>Contact<br/><small>johnjoe<br/>+91 9880454789</small> <span className="pl-4 text-info">Change</span></li>
                            <li>Pickup Information <br/><small> Local Pickup</small> <span className="pl-5 text-info">Change method</span></li>
                        </ul>
                        </section>

                        <section className="p-1">
                            <strong>Payment Information</strong>
                            <p>Choose a way to pay for ypur order:</p>

                            <div className="border p-2">
                            <input type="radio" id="payment" name="payment" value="delivery" />
                            <label className="pl-2" for="delivery">Phone order</label><br/>
                            </div>

                            <div className="border p-2">
                            <input type="radio" id="payment" name="payment" value="credit card"/>
                            <label className="pl-2" for="credit card">Phone order</label><br/>
                            </div>

                            <div className="border p-2">
                            <input type="radio" id="payment" name="payment" value="debit card"/>
                            <label className="pl-2" for="debit card">Phone order</label><br/>
                            </div>

                            <h6 className="pt-2">Payment Instruction</h6>
                            <small>We wil Contact you at phone number that you've provided us with above to arrange the payment</small>
                            <Button className="mb-4 mt-2" variant="info" block>Place Order</Button>
                        </section>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CheckOut;