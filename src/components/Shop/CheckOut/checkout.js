import React from 'react';
import './custom.css';
import BaseComponent from '../../BaseComponent';
import { Container, Row, Col, Spinner, Card, Button, Collapse, FormControl, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import has from "lodash/has";

export default class CheckOut extends BaseComponent {
    constructor(props) {
        super();

        this.order_info = null;
        this.rzp        = null;
        this.ccav       = {
            merchant_id: 272752,
            url        : {
                test   : 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction',
                live   : 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction',
            },
            redirect_url: 'https://admin.hhmworld.com/gateway/ccavResponseHandler.php',
            redirect_urls: 'https://admin.hhmworld.com/gateway/ccavResponseHandler.php'
        };
        this.cart  = this.getCart();
        this.error = true;
        this.state.encData = null;
        this.state.payment = '1';
        this.state.modal = false;
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
        this.toggleModal = this.toggleModal.bind(this);
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
     * Get customer address
     * 
     * @param string d
     */
    getCD(d='&',e='='){
        let query = '';
        for (const key in this.state.baddress) {
            query += d+"customer_"+key+e+this.state.baddress[key];
        }
        let same = this.state.same?this.state.baddress:this.state.daddress
        for (const key in same) {
            query += d+"shipping_"+key+e+same[key];
        }
        return query;
    }

    /**
     * Order completed
     * 
     * @param {object} _this 
     * @param {object} response 
     */
    complete(_this, response){
        _this.setState({
            chekout: response
        });
        
        window._axios.get("/payreturn?text=3&type=1&token="+_this.state.user.token+"&txn_id="+response.razorpay_payment_id+"&product_id="+_this.cart.id+this.getCD())
        .then((result) => {
            return window.location.href = '/checkout/'+response.razorpay_payment_id;
        }).catch(function(error){
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
                        return _this.complete(_this, response);
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
     * Init Ccavenue
     */
    initCcv(){
        if(this.order_info !== null){
            this.toggleModal();
            let query = {
                test    : 'hi',
                product : this.cart.slug,
                tid     : Math.round(new Date().getTime()/1000),
                merchant_param1: window._axios.defaults.baseURL+"payreturn",
                merchant_param2: "text|3@type|2@token|"+this.state.user.token+"@product_id|"+this.cart.id+this.getCD('@', '|'),
                language: 'EN',
                currency: 'INR',
                order_id: this.order_info.id,
                amount  : this.order_info.amount/100,
                merchant_id: this.ccav.merchant_id,
                redirect_url: this.ccav.redirect_url,
                cancel_url : this.ccav.redirect_url,
                billing_email: this.state.user.email
            }
            let same = this.state.baddress;
            for (const key in same) {
                query["billing_"+key] = same[key];
            }
            query = new URLSearchParams(query).toString();
            //https://admin.hhmworld.com/gateway/ccavRequestHandler.php
            window._axios.get("/ccav?"+query)
            .then((result) => {
                result = result.data;
                console.log(this.cart, result);
                if(result.status){
                    this.setState({
                        encData: result.data
                    })
                    setTimeout(() => {
                        document.getElementById('ccas').click();
                    }, 500);
                }
            }).catch(function(error){
                console.log(error.response);
            });
        }
    }
    
    /**
     * Checkout and trigger razorpay
     * @param {object} e 
     */
    chekout(e){
        switch (parseInt(this.state.payment)) {
            case 1:
                this.initRzp();
                break;

            case 2:
                this.initCcv();
                break;
        
            default:
                this.initRzp();
                break;
        }
    }

    /**
     * Check if all form fields are filled
     * 
     * @param {string} form 
     */
    fields(form){
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
  
    /**
     * Handle toggle event
     * 
     * @param {object} e 
     */
    toggle(e){
        if(!has(e.target.dataset, 'key') || (parseInt(e.target.dataset.key) === this.state.tab)){
            return false;
        }

        let tab = parseInt(e.target.dataset.key);

        if(has(e.target.dataset, 'form')){
            let form = (this.state.same)?'baddress':e.target.dataset.form;
            this.fields(form);
        }else{
            let form = (this.state.same)?'baddress':'daddress';
            this.fields(form);
        }
        
        if(!this.error || tab === 0){
            this.setError();
            this.setState({
                tab: tab
            })
        }else{
            this.setError(['All fields are required']);
        }
    }

    /**
     * Handle toggle modal
     * 
     */
    toggleModal(){
        this.setState({
            modal: !this.state.modal
        })
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
        if(!this.state.isLoggedIn || this.cart === ''){
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

        const click = this.error || this.state.tab === 0?{}:{onClick: this.toggle};

        if(this.state.modal){
            return(
                <Modal show={this.state.modal} backdrop="static" keyboard={false}>
                    <Modal.Body>
                        <form method="post" action={this.ccav.url.test}>
                            <p>Dont't close this window. You will be redirect to Ccavenue</p>
                            <div className="center" style={{height:'auto'}}>
                                <Spinner animation="border" variant="info"/>
                            </div>
                            {
                                (this.state.encData === null)
                                ||
                                <>
                                <input type="hidden" name="encRequest" value={this.state.encData[0]} />
                                <input type="hidden" name="access_code" value={this.state.encData[1]} />
                                <button type="submit" id="ccas" style={{display:'none'}}></button>    
                                </>
                            }
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
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
                                <h5 className="header" data-key={1} data-form="daddress" {...click}>Delivery address</h5>
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
                                <h5 className="header" data-key={2} {...click}>Order summary</h5>
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
                                <h5 className="header" data-key={3} {...click}>Payment option</h5>
                                <Collapse in={this.state.tab === 3}>
                                    <div id="_track" className="c-body">
                                        <section className="p-1 c">
                                            <p>Choose a way to pay for your order:</p>

                                            <div className="border text-center p-2">
                                                <img src={require('../img/razorpay.png')} className="img-fluid w-100" alt="rpay" />
                                                <input type="radio" id="razor" name="payment" value="1" onChange={this.onChange} checked={this.state.payment === '1'}/>
                                                <label className="" htmlFor="razor"> Pay with razorpay</label>
                                            </div>

                                            <div className="border text-center p-2">
                                                <img src={require('../img/ccavenue.png')} className="img-fluid w-100" alt="ccavenue" />
                                                <input type="radio" id="ccavenue" name="payment" value="2" onChange={this.onChange} checked={this.state.payment === '2'}/>
                                                <label className="" htmlFor="ccavenue"> Pay with ccavenue</label>
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
        if(this.state.chekout !== null && !this.state.complete){
            return (
                <div className='center'>
                    <Spinner animation="border" variant="info" /><span className="pl-md-2">Validating order, don't close or navigate browser...</span>
                </div>
            )
        }
        
        return this.state.profile === null?<div className="center"><Spinner animation="border" variant="info"/></div>:this.content();

    }

}