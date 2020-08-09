import React from 'react';
import './custom.css';
import BaseComponent from '../../BaseComponent';
import Success from '../OrderConfirm/orderconfirm';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CheckOut extends BaseComponent {
    constructor(props) {
        super();

        this.cart = this.getCart();
        this.state.tinfo = 0;
        this.state.profile = null;
        this.state.chekout = null;
        this.state.complete= false; // after amount payed request send status
        
        if(this.cart !== ''){
            this.cart.ship = this.cart.ship === null?0:0
            this.initRzp();
        }
    }

    componentDidMount(){
        window._axios.get('/profile?token='+this.state.user.token)
        .then((result) => {
            if(result.data !== ''){
              this.setState({
                profile: result.data
              })
            }else{
              this.logOut();
            }
        }).catch(function(error){
          console.log(error.response);
        });
    }

    /**
     * Init razorpay
     */
    initRzp(){
        let _this = this;
        let options = {
            "key": "rzp_test_xlJRG5Yh7YBbXa",
            "amount": parseFloat(this.cart.ship + (this.cart.price * this.cart._qty)) * 10, // 100 paise = INR 1, amount in paisa
            "name": this.cart.name,
            "description": "Rs."+this.cart.price+" | Qty:"+this.cart._qty,
            "handler": function (response){
                console.log(response, 'txn_id ', 'product_id');
                _this.emptyCart();
                _this.setState({
                    chekout: response
                });
                window._axios.get("/payreturn?token="+_this.state.user.token+"&txn_id="+response.razorpay_payment_id+"&product_id="+_this.cart.id)
                .then((result) => {
                    _this.setState({
                        complete: true
                    })
                }).catch(function(error){
                  console.log(error.response);
                });
            },
            "prefill": {
                "email": this.state.user.email
            },
            "notes": {
                "product": this.cart
            },
        };

        this.rzp = new window.Razorpay(options);
        this.chekout = this.chekout.bind(this);
    }
    
    /**
     * Checkout
     * @param {object} e 
     */
    chekout(e){
        this.rzp.open();
    }

    content() {

        console.log(this.state.profile);

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
                            <Link className="text-dark" to="/products">Back to store</Link>
                            <section className="border border-left-0 border-right-0">
                                <p>{this.cart.name}</p>
                                <div className="d-flex">
                                    <img className="img-fluid w-25 pt-1" src={this.cart.thumbnail} alt={'product'} />
                                    <div className="m-auto">
                                        <p>{this.cart._qty} item</p>
                                        <select className="border-0 text-info" name="tinfo" onChange={this.onChange} value={this.state.tinfo}>
                                            <option value="1">More info</option>
                                            <option value="0">Less info</option>
                                        </select>

                                        <div style={{maxHeight: 200,overflow: 'auto'}}>
                                            {this.state.tinfo === "1"?<><div dangerouslySetInnerHTML={{ __html: this.cart.details }} /></>:''}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <p>Subtotal<span className="float-right"> Rs.{this.cart.price}</span></p>
                                    <p>Shipping<span className="float-right"> Rs.{this.cart.ship}</span></p>
                                    <p>Quantity<span className="float-right"> :  {this.cart._qty}x</span> </p>
                                    <h4>TOTAL <span className="float-right">Rs.{parseFloat(this.cart.ship + (this.cart.price * this.cart._qty))}</span></h4>
                                </div>
                            </section>
                        </Col>

                        <Col sm={6} xl={4} md={6} lg={4}><h2>CHECKOUT</h2>
                            <section className="border border-left-0 border-right-0">
                                <ul className="udetails">
                                    <li>Email<br /><small>{this.state.profile.email}</small></li>
                                    <li>Contact<br /><small>{this.state.profile.name} | {this.state.profile.phone}</small></li>
                                    <li>Pickup Information <br /><small> {this.state.profile.address+', '+this.state.profile.city+', '+this.state.profile.country+', '+this.state.profile.zip}</small></li>
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
        if(this.state.chekout !== null){
            return(<Success complete={this.state.complete} cart={this.cart} payment_id={this.state.chekout.razorpay_payment_id}/>);
        }
        return this.state.profile === null?'loading....':this.content();

    }

}