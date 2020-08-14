import React from "react";
import BaseComponent from '../BaseComponent';
import './custom.css';
import { Button, Container, Card, Row, Col, Collapse, FormControl, Spinner } from "react-bootstrap";
import has from "lodash/has";

export default class Index extends BaseComponent {
  constructor(props) {
    super();
    this.state.profile  = null;
    this.state.orders   = [];
    this.state.ordersL  = false;
    this.state.orderid    = '';
    this.state.tab = 0;

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    window._axios.get('/profile?param=true&token='+this.state.user.token)
    .then((result) => {
      console.log(result);
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
   * Load orders
   */
  loadOrders(){
    window._axios.get('/orders?param=true&token='+this.state.user.token)
    .then((result) => {
      console.log(result);
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
      if(!this.state.ordersL && has(e.target.dataset, 'order')){
        this.loadOrders();
      }
      this.setState({
        tab: parseInt(e.target.dataset.key)
      })
    }
  }

  content() {
    return (
      <>

        <Card className={"my-3 pro mw "+(this.state.tab === 0)}>
          <h5 className="header" data-key={0} onClick={this.toggle}>Profile</h5>
          <Collapse in={this.state.tab === 0}>
            <div id="_profile" className="c-body">
              <form data-action="profile" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                <FormControl placeholder="Name" id="name" name="profile.name" value={this.state.profile.name} onChange={this.onChange} />

                <FormControl placeholder="Email" type="email" id="email" name="profile.email" value={this.state.profile.email} onChange={this.onChange} />

                <Button type="submit" variant="light">Update</Button>

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 1)}>
          <h5 className="header" data-key={1} onClick={this.toggle}>Address</h5>
          <Collapse in={this.state.tab === 1}>
            <div id="_address" className="c-body">
              <form data-action="address" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                <FormControl placeholder="Name" id="aname" name="profile.name" value={this.state.profile.name} onChange={this.onChange} />

                <FormControl placeholder="Contact #" id="phone" name="profile.phone" value={this.state.profile.phone} onChange={this.onChange} />

                <FormControl placeholder="Address" id="address" name="profile.address" value={this.state.profile.address} onChange={this.onChange} />

                <FormControl placeholder="City" id="city" name="profile.city" value={this.state.profile.city} onChange={this.onChange} />

                <FormControl placeholder="Country" id="country" name="profile.country" value={this.state.profile.country} onChange={this.onChange} />

                <FormControl placeholder="Pincode" id="zip" name="profile.zip" value={this.state.profile.zip} onChange={this.onChange} />

                <Button type="submit" variant="light">Update</Button>

                <Button type="button" variant="light">Add</Button>

              </form>
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 2)}>
          <h5 className="header" data-key={2} data-order="true" onClick={this.toggle}>My orders</h5>
          <Collapse in={this.state.tab === 2}>
            <div id="_order" className="c-body">
              {
                this.state.orders.map((order, i) => (
                  <strong className="d-block" key={i}>{order.order_number}</strong>
                ))
              }
            </div>
          </Collapse>
        </Card>

        <Card className={"my-3 pro mw "+(this.state.tab === 3)}>
          <h5 className="header" data-key={3} onClick={this.toggle}>Track my order</h5>
          <Collapse in={this.state.tab === 3}>
            <div id="_track" className="c-body">
            <form data-action="track" data-method="post" data-callback="afterSubmit" onSubmit={this.onSubmit}>
                <FormControl placeholder="Order id" id="order" name="orderid" value={this.state.orderid} onChange={this.onChange} required/>

                <Button type="submit" variant="light">Track</Button>

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
          <Row>
            <Col md={12} className="border-primary m-auto">
              <Button size="sm" variant="link" className="logout text-light" onClick={this.logOut}>Logout</Button>
              
              {this.state.profile === null?<div className="center"><Spinner animation="border" variant="info"/></div>:this.content()}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}