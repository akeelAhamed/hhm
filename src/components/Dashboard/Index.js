import React from "react";
import BaseComponent from '../BaseComponent';
import './custom.css';
import { Button, Container, Card, Row, Col, Collapse, FormControl, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import has from "lodash/has";
import map from "lodash/map";
import pick from "lodash/pick";
import keys from "lodash/keys";

export default class Index extends BaseComponent {
  constructor(props) {
    super();

    this.variant = 'danger';
    this.state.profileLoaded = null;
    this.state.profile  = {
      name: '',
      email: '',
      phone: '',
      zip: '',
      city: '',
      country: '',
      address: ''
    };
    this.state.password = {
      cpass: '',
      newpass: '',
      renewpass: '',
    };
    this.state.orders   = [];
    this.state.ordersL  = false;
    this.state.orderid    = '';
    this.state.tab = 0;


    this.toggle = this.toggle.bind(this);
    this.onSubmitSelf = this.onSubmitSelf.bind(this);
  }

  componentDidMount(){
    window._axios.get('/profile?param=true&token='+this.state.user.token)
    .then((result) => {
        if(result.data !== ''){
          let profile = pick(result.data, keys(this.state.profile));
          this.setState({
            profileLoaded: result.data,
            profile: profile
          })
        }else{
          this.logOut();
        }
    }).catch(function(error){
      console.log(error.response);
    });
  }

  /**
   * Load orders
   */
  loadOrders(){
    window._axios.get('/orders?param=true&token='+this.state.user.token)
    .then((result) => {
        if(result.data !== ''){
          this.setState({
            ordersL: true,
            orders : result.data
          })
        }else{
          this.logOut();
        }
    }).catch(function(error){
      console.log(error.response);
    });
  }

  /**
   * Handle toggle event
   * 
   * @param {object} e 
   */
  toggle(e){
    if(has(e.target.dataset, 'key')){
      let state = {
        tab: parseInt(e.target.dataset.key),
        errors: []
      };

      if(!this.state.ordersL && has(e.target.dataset, 'order')){
        this.loadOrders();
      }else if(has(e.target.dataset, 'track')){
        state.orderid = e.target.dataset.track
      }

      this.setState({
        ...state
      })
    }
  }

  /**
   * Order details
   */
  orderDetails(order){
    if(has(order, 'orders_items')){
      const info = map(JSON.parse(order.orders_items))[0];
      return(
        <section className="c">
          <p className="mb-1">Order id&nbsp;: <Button variant="link" data-key={3} data-track={order.order_number} onClick={this.toggle}>{order.order_number}</Button></p>
          <p className="mb-1">Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span style={{padding: '.375rem .75rem'}}>{order.created_at}</span></p>
          <p>Delivery : <span style={{padding: '.375rem .75rem'}}>{order.delivery_date}</span></p>
          <h5>{info.item.name}</h5>
          {/* <p>Seller      : {order.seller_information}</p> */}
          <div className="d-flex">
              <span>Pack contain</span> : 
              <ul className="ml-1" style={{listStyle: "none"}}>
                  {
                  (
                    info.item.size === ""
                    ?[]
                    :info.item.size
                  ).map((p, i) => (
                      <li key={i}>{p}</li>
                  ))
                  }
              </ul>
          </div>
          <div>
              <p>Total weight: 12 Kg</p>
              <small>One year pack</small><br/>
              <p>Qty: {info.qty}</p>
              <h5 className="border py-2"><b>ORDER TOTAL : Rs.{info.item.price}</b> <small>(Inclusive of all tax)</small></h5>
          </div>
        </section>
      );
    }
  }

  /**
   * Handle on submit form event
   * 
   * @param object event 
   */
  onSubmitSelf(event){
    event.preventDefault();

    if(has(event.target.dataset, 'action') && has(event.target.dataset, 'method') && has(event.target.dataset, 'state')){
      this.toggleDisable();
      const data = event.target.dataset;
      this.setError([]);
      window._axios({
        method: data.method,
        url: data.action+'?param=true&token='+this.state.user.token,
        data: this.state[data.state]
      }).then((response) => {
        this.toggleDisable();
        if(has(data, 'callback')){
          if(typeof this[data.callback] === "function"){
            return this[data.callback](response.data);
          }
        }
        console.log(response);
      }, (error) => {
        this.toggleDisable();
        if(has(data, 'callback')){
          if(typeof this[data.callback] === "function"){
            return this[data.callback](error.response.data);
          }
        }
        console.log(error.response);
      });
    }
  }

  /**
   * Track ordeder response
   * 
   * @param {object} response 
   */
  afterTrack(response){
    alert(response.result);
    if(has(response, 'Staus')){
      return this.redirect('track?'+this.state.orderid+'='+response.Staus);
    }
  }

  /**
   * After submit
   * 
   * @param {object} response 
   */
  afterSubmit(response){
    if(has(response, 'errors')){
      return this.setError(response.errors);
    }
    switch (this.state.tab) {
      case 0:
        // Profile
        let data = this.state.profile;
        data.token = this.state.user.token;
        this.login(data, null);
        break;

      case 4:
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        break;
    
      default:
        break;
    }
    this.variant = 'success';
    let _this = this;
    this.setError(['Updated successfully']);
    setTimeout(() => {
      _this.setError([]);
    }, 3000);
  }

  content() {
    return (
      <>
        <strong className="welcome">Welcome: {this.state.profile.name}</strong>
        <Card className={"my-3 pro mw "+(this.state.tab === 0)}>
          <h5 className="header" data-key={0} onClick={this.toggle}>Profile</h5>
          <Collapse in={this.state.tab === 0}>
            <div id="_profile" className="c-body">
              <form data-action="profileupdate" data-state="profile" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmitSelf}>
                <FormControl placeholder="Name" id="name" name="profile.name" value={this.state.profile.name} onChange={this.onChange} required />

                <FormControl placeholder="Mobile no" id="phone" name="profile.phone" value={this.state.profile.phone} onChange={this.onChange} required />

                <FormControl placeholder="Email" type="email" id="email" name="profile.email" value={this.state.profile.email} readOnly required />

                {this.getError(this.variant)}
                
                <Button variant="light" type="submit" disabled={this.state.disabled}>
                  {this.state.disabled?'Loading...':'Update'}
                </Button>

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 1)}>
          <h5 className="header" data-key={1} onClick={this.toggle}>Address</h5>
          <Collapse in={this.state.tab === 1}>
            <div id="_address" className="c-body">
              <form data-action="profileupdate" data-state="profile" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmitSelf}>
                {/* <FormControl placeholder="Name" id="aname" name="profile.name" value={this.state.profile.name} onChange={this.onChange} /> */}

                {/* <FormControl placeholder="Contact #" id="phone" name="profile.phone" value={this.state.profile.phone} onChange={this.onChange} /> */}

                <FormControl placeholder="Address" id="address" name="profile.address" value={this.state.profile.address} onChange={this.onChange} required />

                <FormControl placeholder="City" id="city" name="profile.city" value={this.state.profile.city} onChange={this.onChange} required />

                <FormControl placeholder="Country" id="country" name="profile.country" value={this.state.profile.country} onChange={this.onChange} required />

                <FormControl placeholder="Pincode" id="zip" name="profile.zip" value={this.state.profile.zip} onChange={this.onChange} required/>

                {this.getError(this.variant)}
                
                <Button variant="light" type="submit" disabled={this.state.disabled}>
                  {this.state.disabled?'Loading...':'Update'}
                </Button>

                {/* <Button type="button" variant="light">Add</Button> */}

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 4)}>
          <h5 className="header" data-key={4} onClick={this.toggle}>Change password</h5>
          <Collapse in={this.state.tab === 4}>
            <div id="_password" className="c-body">
              <form data-action="reset" data-state="password" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmitSelf}>

                <FormControl type="password" placeholder="Old password" id="cpass" name="password.cpass" value={this.state.password.cpass} onChange={this.onChange} />

                <FormControl type="password" placeholder="New password" id="newpass" name="password.newpass" value={this.state.password.newpass} onChange={this.onChange} />

                <FormControl type="password" placeholder="Confirm Password" id="renewpass" name="password.renewpass" value={this.state.password.renewpass} onChange={this.onChange} />

                {this.getError(this.variant)}
                
                <Button variant="light" type="submit" disabled={this.state.disabled}>
                  {this.state.disabled?'Loading...':'Update'}
                </Button>
              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 2)}>
          <h5 className="header" data-key={2} data-order="true" onClick={this.toggle}>My orders</h5>
          <Collapse in={this.state.tab === 2}>
            <div id="_order" className="c-body hs">
              {
                this.state.ordersL
                ||
                <div className="text-center"><Spinner animation="border" variant="info"/></div>
              }
              {
                this.state.orders.map((order, i) => (
                  <div key={i} className="order-list">{this.orderDetails(order)}</div>
                ))
              }
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 3)}>
          <h5 className="header" data-key={3} onClick={this.toggle}>Track my order</h5>
          <Collapse in={this.state.tab === 3}>
            <div id="_track" className="c-body">
              <form data-action="trackcode" data-method="get" data-callback="afterTrack" onSubmit={this.onSubmit}>

                <FormControl type="hidden" name="type" value="track" readOnly required/>

                <FormControl placeholder="Order id" id="order" name="orderid" value={this.state.orderid} onChange={this.onChange} required/>

                <Button type="submit" variant="light"disabled={this.state.disabled}>
                  {this.state.disabled?'Tracking...':'Track'}
                </Button>

              </form>
            </div>
          </Collapse>
        </Card>
      
      </>
    );
  }

  render() {
    return (
      <div className="main-container">
        <Container fluid>
          <Button size="sm" variant="link" className="logout text-light" onClick={this.logOut}>Logout</Button>
          
          <Row>
            <Col sm={{ span: 5, offset:1 }} className="border-primary">
              
              {this.state.profileLoaded === null?<div className="center"><Spinner animation="border" variant="info"/></div>:this.content()}

            </Col>

            <Col sm={{ span: 6 }} className="border-primary mt-sm-5 mb-3">
              <Link to="/item/hhm-pure-panacea-ultimate-for-rousing-energy-hhm00100">
                <img alt="ad" className="img-fluid" src={require('./img/anubhuvan.png')} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}