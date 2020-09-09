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

        this.order_info = null;
        this.rzp        = null;
        this.cart  = this.getCart();
        this.error = true;
        this.state.tab = 0;
        this.state.promo = '';
        this.state.discount = 0;
        this.state.tinfo = 0;
        this.state.profile = null;
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
        this.onSubmitSelf = this.onSubmitSelf.bind(this);
    }

    componentDidMount(){
        if(this.cart !== ''){
            window._axios.get('/profile?param=true&token='+this.state.user.token)
            .then((result) => {
                if(result.data !== ''){
                    const baddress = {
                        name: result.data.name,
                        phone: result.data.phone,
                        address: result.data.address,
                        city: result.data.city,
                        country: result.data.country,
                        zip: result.data.zip
                    };
                  this.setState({
                    profile: result.data,
                    baddress: baddress
                  });
                  this.getOrderId();
                }else{
                  this.logOut();
                }
            })
            .catch(function(error){
              console.log(error.response);
            });
        }else{
            this.setState({
                profile: {}
            });
        }
    }

    /**
     * Get order id from backend
     */
    getOrderId(){
        window._axios.get('https://admin.hhmworld.com/demo1.php?test=hhpure&amount='+parseInt(this.cart.ship + (this.cart.price * this.cart._qty) * 100))
        .then((result) => {
            if(result.data !== ''){
              this.order_info = result.data;
            }else{
              this.logOut();
            }
        })
        .catch(function(error){
          console.log(error.response);
        });
    }

    /**
     * Init razorpay
     */
    initRzp(){
        if(this.order_info !== null){
            if(this.rzp === null){
                let _this = this;
                let options = {
                    "key": "rzp_live_WKGmFHukrq59Cm",
                    "image": this.cart.photo,
                    "amount": this.order_info.amount * 100, // 100 paise = INR 1, amount in paisa
                    "name": this.cart.name,
                    "description": this.cart.seller_information+" | Price: Rs."+this.cart.price+" | Qty :"+this.cart._qty,
                    "order_id": this.order_info.id,
                    "handler": function (response){
                        _this.emptyCart();
                        _this.setState({
                            chekout: response
                        });
                        let query = '';
                        for (const key in _this.state.baddress) {
                            query += "&customer_"+key+"="+_this.state.baddress[key];
                        }
                        let same = _this.state.same?_this.state.baddress:_this.state.daddress
                        for (const key in same) {
                            query += "&shipping_"+key+"="+same[key];
                        }
                        window._axios.get("/payreturn?text=3&token="+_this.state.user.token+"&txn_id="+response.razorpay_payment_id+"&product_id="+_this.cart.id+query)
                        .then((result) => {
                            _this.setState({
                                complete: true
                            })
                        }).catch(function(error){
                          console.log(error.response);
                        });
                    },
                    "prefill": {
                        "email": this.state.user.email,
                        "contact": this.state.same?this.state.baddress.phone:this.state.daddress.phone
                    },
                    "notes": {
                        "product": this.cart
                    },
                };
                this.rzp = new window.Razorpay(options);
            }
            
            return this.rzp.open();
        }
        console.log('order id was not created');
    }
    
    /**
     * Checkout and trigger razorpay
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
        if(has(e.target.dataset, 'form')){
            let form = (this.state.same)?'baddress':e.target.dataset.form;
            let state = this.state[form];
            let stateInfo = {
                len: Object.keys(state).length,
                i  : 0
            }
            for (const key in state) {
                stateInfo.i++;
                if(state[key] === '' || state[key] === null){
                    this.error = true;
                    break;
                }
            }
            this.error = !(stateInfo.i === stateInfo.len);
        }
        
        if(!this.error){
            this.setError();
            if(has(e.target.dataset, 'key')){
                this.setState({
                    tab: parseInt(e.target.dataset.key)
                })
            }
        }else{
            this.setError(['All fields are required']);
        }
    }

    onChangeSelf(e){
        const {name, value} = e.target;
        if(name === 'same'){
            this.error = !this.state.same||true;
            return this.setState({
                same: !this.state.same
            })
        }else if(!this.state.same){
            const obj = {
                target: {
                    name : name,
                    value: value
                }
            }
            return this.onChange(obj);
        }
    }

    onSubmitSelf(e){
        e.preventDefault();
        return this.toggle(e);
    }

    content() {
        if(!this.state.isLoggedIn){
            return (
                <div className="main-container">
                    <Container fluid>
                        <Row className="justify-content-center pt-3" style={{height: '70vh'}}>
                            <Col sm={5} className="m-auto text-center">
                                <section className="p-1">
                                    <img className="img-fluid d-block m-auto" src={require("../img/emptycart.png")} alt="cart is empty" />
                                    <strong>Your cart is empty</strong>
                                    <Link to="/products" className="btn btn-info d-block m-auto w-75">Shop now</Link>
                                </section>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }else if(this.cart === ''){
            return (
                <div className="main-container">
                    <Container fluid>
                        <Row className="justify-content-center pt-3" style={{height: '70vh'}}>
                            <Col sm={5} className="m-auto text-center">
                                <section className="p-1">
                                    <img className="img-fluid d-block m-auto" src={require("../img/emptycart.png")} alt="cart is empty" />
                                    <strong>Your cart is empty</strong>
                                    <Link to="/products" className="btn btn-info d-block m-auto w-75">Shop now</Link>
                                </section>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }

        return (
            <div className="main-container">
                <Container fluid>
                    <Row>
                        <Col className="bg-light" sm={{ span: 7, offset:1 }}>
                            <Card className={"my-3 pro c "+(this.state.tab === 0)}>
                                <h5 className="header" data-key={0} onClick={this.toggle}>Billing address</h5>
                                <Collapse in={this.state.tab === 0}>
                                    <div id="_profile" className="c-body">
                                        <form data-key={1} data-form="baddress" onSubmit={this.onSubmitSelf}>
                                            <FormControl placeholder="Full Name" name="baddress.name" value={this.state.baddress.name} onChange={this.onChange}/>

                                            <FormControl type="number" placeholder="Mobile number" name="baddress.phone" value={this.state.baddress.phone} onChange={this.onChange}/>

                                            <FormControl placeholder="Address" name="baddress.address" value={this.state.baddress.address} onChange={this.onChange}/>

                                            <FormControl placeholder="City" name="baddress.city" value={this.state.baddress.city} onChange={this.onChange}/>

                                            <FormControl placeholder="Country" name="baddress.country" value={this.state.baddress.country} onChange={this.onChange}/>

                                            <FormControl type="number" placeholder="Pincode" name="baddress.zip" value={this.state.baddress.zip} onChange={this.onChange}/>

                                            {this.getError()}

                                            <Button type="submit" variant="dark" className="c" data-key={1} data-form="baddress" onClick={this.toggle}>Continue</Button>

                                        </form>
                                    
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 1)}>
                                <h5 className="header" data-key={1} data-form="daddress" onClick={this.toggle}>Delivery address</h5>
                                <Collapse in={this.state.tab === 1}>
                                    <div id="_address" className="c-body">
                                        <form data-key={2} data-form="daddress" onSubmit={this.onSubmitSelf}>
                                            <FormControl placeholder="Full Name" name="daddress.name" value={(this.state.same)?this.state.baddress.name:this.state.daddress.name} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Mobile number" name="daddress.phone" value={(this.state.same)?this.state.baddress.phone:this.state.daddress.phone} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Address" name="daddress.address" value={(this.state.same)?this.state.baddress.address:this.state.daddress.address} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="City" name="daddress.city" value={(this.state.same)?this.state.baddress.city:this.state.daddress.city} onChange={this.onChangeSelf} />

                                            <FormControl placeholder="Country" name="daddress.country" value={(this.state.same)?this.state.baddress.country:this.state.daddress.country} onChange={this.onChangeSelf} />

                                            <FormControl type="number" placeholder="Pincode" name="daddress.zip" value={(this.state.same)?this.state.baddress.zip:this.state.daddress.zip} onChange={this.onChangeSelf} />

                                            <Form.Check id="sameas" type="checkbox" label="Same as billing address" name="same" value={this.state.same} onChange={this.onChangeSelf} />

                                            {this.getError()}

                                            <Button type="submit" variant="dark" className="c" data-key={2} data-form="daddress" onClick={this.toggle}>Continue</Button>

                                        </form>
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 2)}>
                                <h5 className="header" data-key={2} onClick={this.toggle}>Order summary</h5>
                                <Collapse in={this.state.tab === 2}>
                                    <div id="_order" className="c-body">
                                        {/* <Link className="text-dark" to="/products">Back to store</Link> */}
                                        <section className="c">
                                            <h5>{this.cart.name}</h5>
                                            <p>Seller      : {this.cart.seller_information}</p>
                                            <div className="d-flex">
                                                <span>Pack contain</span> : 
                                                <ul className="ml-1" style={{listStyle: "none"}}>
                                                    {
                                                    this.cart.size.map((p, i) => (
                                                        <li key={i}>{p}</li>
                                                    ))
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <p>Total weight: {this.cart.views}</p>
                                                <small>One year pack</small><br/>
                                                <p>Qty: {this.cart._qty}</p>
                                                <h5 className="border py-2"><b>ORDER TOTAL : Rs.{parseFloat(this.cart.ship + (this.cart.price * this.cart._qty) - this.state.discount)}</b> <small>(Inclusive of all tax)</small></h5>
                                            </div>
                                            <Button type="button" variant="dark" className="c" data-key={3} onClick={this.toggle} disabled={this.error}>Continue</Button>
                                        </section>
                                    </div>
                                </Collapse>
                            </Card>

                            <Card className={"my-3 pro "+(this.state.tab === 3)}>
                                <h5 className="header" data-key={3} onClick={this.toggle}>Payment option</h5>
                                <Collapse in={this.state.tab === 3}>
                                    <div id="_track" className="c-body">
                                        <section className="p-1 c">
                                            {/* <FormControl className="text-center" aria-label="Promo code" placeholder='Have a promo code...' value={this.state.promo} name="promo" onChange={this.onChange}/> */}
                                            <p>Choose a way to pay for your order:</p>

                                            <div className="border text-center p-2">
                                                <img src={require('../img/razorpay.png')} className="img-fluid" alt="rpay" />
                                                <input type="radio" id="razor" name="razor" value="razor" checked readOnly/>
                                                <label className="" htmlFor="razor">Pay with razorpay</label>
                                            </div>

                                            <Button className="mb-4 mt-2" variant="info" block onClick={this.chekout} disabled={this.error}>Place Order</Button>
                                        </section>
                                    </div>
                                </Collapse>
                            </Card>
                        </Col>

                        <Col className="bg-light" sm={3}>
                            <img src={require('../img/shield.png')} style={{width:75}} alt="secure" className="img-fluid float-left mt-1" />
                            <span className="d-block mt-3">Safe and secure payment. 100% Authentic product.</span>
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