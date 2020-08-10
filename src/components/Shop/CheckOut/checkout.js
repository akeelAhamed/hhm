import React from 'react';
import './custom.css';
import BaseComponent from '../../BaseComponent';
import Success from '../OrderConfirm/orderconfirm';
import { Container, Row, Col, Spinner, Card, Button, Collapse, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import has from "lodash/has";

export default class CheckOut extends BaseComponent {
    constructor(props) {
        super();

        this.cart = this.getCart();
        this.state.tinfo = 0;
        this.state.tab = 0;
        this.state.profile = {
            "id": 36,
            "name": "Akeel",
            "photo": null,
            "zip": null,
            "city": null,
            "country": null,
            "address": null,
            "phone": null,
            "fax": null,
            "email": "Akeel@gmail.com",
            "created_at": "2020-08-03 07:56:59",
            "updated_at": "2020-08-03 07:56:59",
            "is_provider": "0",
            "status": "0",
            "verification_link": "85703cc672749036372b9d04a6342086",
            "email_verified": "Yes",
            "affilate_code": "3578fde5d3edff1fde5cd46cc3b785f3",
            "affilate_income": "0",
            "shop_name": null,
            "owner_name": null,
            "shop_number": null,
            "shop_address": null,
            "reg_number": null,
            "shop_message": null,
            "shop_details": null,
            "shop_image": null,
            "f_url": null,
            "g_url": null,
            "t_url": null,
            "l_url": null,
            "is_vendor": "0",
            "f_check": "0",
            "g_check": "0",
            "t_check": "0",
            "l_check": "0",
            "mail_sent": "0",
            "shipping_cost": "0",
            "current_balance": "0",
            "date": null,
            "ban": "0"
        };
        this.state.chekout = null;
        this.state.complete= false; // after amount payed request send status
        this.state.same = false;
        this.state.baddress= {
            name: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            zip: ''
        }
        this.state.daddress= {
            name: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            zip: ''
        }
        
        if(this.cart !== ''){
            this.cart.ship = this.cart.ship === null?0:0;
            this.chekout = this.chekout.bind(this);
        }
        
        this.toggle = this.toggle.bind(this);
        this.onChangeSelf = this.onChangeSelf.bind(this);

        
        console.log(this.state.profile);
    }

    componentDidMount(){
        // window._axios.get('/profile?token='+this.state.user.token)
        // .then((result) => {
        //     if(result.data !== ''){
        //       this.setState({
        //         profile: result.data
        //       })
        //     }else{
        //       this.logOut();
        //     }
        // }).catch(function(error){
        //   console.log(error.response);
        // });
    }

    /**
     * Init razorpay
     */
    initRzp(){
        let _this = this;
        let options = {
            "key": "rzp_test_xlJRG5Yh7YBbXa",
            "amount": parseFloat(this.cart.ship + (this.cart.price * this.cart._qty)) * 100, // 100 paise = INR 1, amount in paisa
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
        this.rzp.open();
    }
    
    /**
     * Checkout
     * @param {object} e 
     */
    chekout(e){
        return this.initRzp();
    }
  
    /**
     * Handle toggle event
     * 
     * @param {object} e 
     */
    toggle(e){
        if(has(e.target.dataset, 'key')){
        this.setState({
            tab: parseInt(e.target.dataset.key)
        })
        }
    }

    onChangeSelf(e){
        const {name, value} = e.target;
        const obj = {
            target: {
                name : name,
                value: value
            }
        }
        return this.onChange(obj);
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

        console.log(this.state.same);

        return (
            <div className="main-container">
                <Container fluid>
                    <Row>
                        <Col sm={8}>
                            <Card className={"my-3 pro "+(this.state.tab === 0)}>
                                <h5 className="header" data-key={0} onClick={this.toggle}>Billing address</h5>
                                <Collapse in={this.state.tab === 0}>
                                    <div id="_profile" className="c-body">
                                    <form data-action="address" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                                            <FormControl placeholder="Full Name" name="baddress.name" value={this.state.baddress.name} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Mobile number" name="baddress.phone" value={this.state.baddress.phone} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Address" name="baddress.address" value={this.state.baddress.address} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="City" name="baddress.city" value={this.state.baddress.city} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Country" name="baddress.country" value={this.state.baddress.country} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Pincode" name="baddress.zip" value={this.state.baddress.zip} onChange={this.onChangeSelf} />

                                            <Button type="button" variant="dark" className="c" data-key={1} onClick={this.toggle}>Continue</Button>

                                        </form>
                                    
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 1)}>
                                <h5 className="header" data-key={1} onClick={this.toggle}>Delivery address</h5>
                                <Collapse in={this.state.tab === 1}>
                                    <div id="_address" className="c-body">
                                        <form data-action="address" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                                            <FormControl placeholder="Full Name" name="daddress.name" value={this.state.daddress.name} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Mobile number" name="daddress.phone" value={this.state.daddress.phone} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Address" name="daddress.address" value={this.state.daddress.address} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="City" name="daddress.city" value={this.state.daddress.city} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Country" name="daddress.country" value={this.state.daddress.country} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Pincode" name="daddress.zip" value={this.state.daddress.zip} onChange={this.onChangeSelf} />

                                            <Form.Check id="sameas" type="checkbox" label="Same as billing address" name="same" value={!this.state.same} onChange={this.onChange} />

                                            <Button type="button" variant="dark" className="c" data-key={2} onClick={this.toggle}>Continue</Button>

                                        </form>
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 2)}>
                                <h5 className="header" data-key={2} onClick={this.toggle}>Order summary</h5>
                                <Collapse in={this.state.tab === 2}>
                                    <div id="_order" className="c-body">
                                        <Link className="text-dark" to="/products">Back to store</Link>
                                        <section className="border border-left-0 border-right-0">
                                            <p>{this.cart.name}</p>
                                            <div className="d-flex pt-1">
                                                <img className="img-fluid w-50" src={this.cart.thumbnail} alt={'product'} />
                                                <div className="w-50">
                                                    <p>{this.cart._qty} item</p>
                                                    <select className="border-0 text-info" name="tinfo" onChange={this.onChangeSelf} value={this.state.tinfo}>
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
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 3)}>
                                <h5 className="header" data-key={3} onClick={this.toggle}>Payment option</h5>
                                <Collapse in={this.state.tab === 3}>
                                    <div id="_track" className="c-body">
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
                                    </div>
                                </Collapse>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            <img src={require('../img/shield.png')} style={{width:75}} alt="secure" className="img-fluid float-left mt-1" />
                            <span className="d-block mt-3">Safe and secure payment. Easy return. 100% Authentic product.</span>
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
        
        return this.state.profile === null?<div className="center"><Spinner animation="border" variant="info"/></div>:this.content();

    }

}