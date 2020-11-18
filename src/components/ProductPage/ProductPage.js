import React from "react";
import { Button, Container, Row, Col, InputGroup, OverlayTrigger, Popover} from 'react-bootstrap';
import has from "lodash/has";
import BaseComponent from '../BaseComponent';
import Gallery2 from './Gallery2';
import "./custom.css";

import { Link } from "react-router-dom";
import { FaCheckCircle, FaLock } from "react-icons/fa";

class ProductPage extends BaseComponent {
  constructor(props) {
    super();

    this.cart = this.getCart();
    this.state.qty = (this.cart !== '')?this.cart._qty:1;
    this.state.availability = '';
    this.state.tab = 12;
    this.state.gallery = [];
    this.days  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.buy = this.buy.bind(this);
    this.loginBuy = this.loginBuy.bind(this);
    this.toCart = this.toCart.bind(this);
    this.qtyClick = this.qtyClick.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  /**
   * Cart added
   * @param {object} e 
   */
  toCart(e){
    this.setState({
      qty: this.state.qty
    })
    return this.addCart(this.pageContent, this.state.qty);
  }
  
  /**
   * Cart added and checkout
   * 
   * @param {object} e 
   */
  buy(e){
    this.toCart(e);
    return this.redirect('checkout');
  }
  
  /**
   * Cart added and redirect to
   * 
   * @param {object} e 
   */
  loginBuy(e){
    this.toCart(e);
    return this.redirect(e.target.dataset.to);
  }
  
  /**
   * Change quantity
   * 
   * @param {object} e
   */
  qtyClick(e){
    if(has(e.target.dataset, 'qty')){
      if(e.target.dataset.qty === "1" && this.state.qty < 7){
        this.setState({
          qty: ++this.state.qty
        })
      }else if(e.target.dataset.qty === "0" && this.state.qty > 1){
        this.setState({
          qty: --this.state.qty
        })
      }
    }
  }

  buyButtom(){
    this.cart = this.getCart();

    if(this.state.isLoggedIn){
      if(this.pageContent.stock <= 0){
        return(<span className="text-danger">Out of stock</span>);
      }

      return(
          <InputGroup className="buy">
            <InputGroup.Append className="d-block">
              <Button className="btn btn-primary buy-btn" onClick={this.buy}>Buy now</Button>
              {
                // (this.cart === '')
                // ?<Button className="btn btn-primary rounded ml-1" onClick={this.toCart}>Add to cart</Button>
                // :<Link className="btn btn-primary rounded ml-1" to="/cart">Cart</Link>
              }
            </InputGroup.Append>

            <div className="d-none w-100 my-2">
              <small> <FaLock /> Secure transaction</small>
              <small className="ml-2">EMI</small>
            </div>

            {/* <input type="number" className="border pl-2 d-block w-100" name="availability" placeholder="Enter pincode"/> */}
            <span>{this.state.availability}</span>
          </InputGroup>
      );
    }
    return(<Button className="mt-3 btn btn-primary buy-btn" onClick={this.loginBuy} data-to={"register?checkout"}>Buy Now</Button>);
  }

  popShipp(){
    const popShipp = (
      <Popover id="popover-ship">
        <Popover.Content>
          <strong>Shipping</strong>
          <ul className="ml-3">
            <li>Free shipping inside India.</li>
            <li>Shipping and delivery done through third party service.</li>
            <li>Once the shipment Dispatched, the Tracking ID will be provided.</li>
            <li>Shipment can be tracked with the provided Tracking ID on our website.</li>
            <li>As per the Shipping Service, a Signature might be needed for the delivery.</li>
          </ul>
        </Popover.Content>
      </Popover>
    );

    return(
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="top"
      overlay={popShipp}
    >
      <p className="btn p-0">
        Shipping
        <img
          src={require('../Products/img/Shipping.png')}
          width="50"
          height="50"
          alt="logo"
          className="img-fluid px-2"
        />
      </p>
    </OverlayTrigger>
    )
  }

  popPoly(){
    const popShipp = (
      <Popover id="popover-poly">
        <Popover.Content>
          <strong>Refund Policy</strong>
          <ul className="ml-3">
            <li>Once the Order is placed there is no Cancelation/Refund.</li>
            <li>Product replacement can be done on reporting within Four days from the delivery date, over any damage occurred on the Product while receiving. Conditions Apply.</li>
          </ul>
        </Popover.Content>
      </Popover>
    );

    return(
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="top"
      overlay={popShipp}
    >
      <p className="btn p-0">
        Refund policy
        <img
          src={require('../Products/img/Refund.png')}
          width="50"
          height="50"
          alt="logo"
          className="img-fluid px-2"
        />
      </p>
    </OverlayTrigger>
    )
  }

  gallery(){
    const gall = this.pageContent.gallery.split(',');
    return gall;
  }

  setTab(e){
    this.setState({tab: e, gallery: this.gallery()});
  }

  variant(){
    const AMB = (
      <p><b>Select Quantity</b> <span data-qty="0" onClick={this.qtyClick} className={(this.state.qty > 1)?"btn":"btn disabled"}>-</span><span className="qty">{this.state.qty}</span><span data-qty="1" onClick={this.qtyClick}className={(this.state.qty < 7)?"btn":"btn disabled"}>+</span> <b>Total weight: {this.state.tab === 12?this.pageContent.views:this.pageContent.packageweight}</b></p>
    );

    if(this.state.tab === 12){
      //  year pack
      return(
        <>
          <div className="d-block">
              <span>Pack contains</span> : 
              <ul className="ml-3" style={{listStyle: "dots"}}>
                {
                  this.pageContent.size.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))
                }
              </ul>
            </div>
            
            <hr />

            <div>
              <div className="d-flex align-items-center">
                {AMB}
              </div>
              <b>Total amount: ₹.59,999</b> /- <cite>(Inclusive all taxes)</cite><br/>
              <small className="d-block">(Rupees Fifty nine thousand nine hundred  and ninety nine)</small>
              <p>
                <small>Free shipping inside India</small> | 
                <small>Expected arrival date: {this.pageContent.ship}</small>
              </p>
            </div>
        </>
      )
    }

    return(
      <>
        <div className="d-block">
            <span>Pack contains</span> : 
            <ul className="ml-3" style={{listStyle: "dots"}}>
              <li>3 Monthly boxes each having 30 sachet</li>
              <li>1 PURE Lamp with box</li>
              <li>1 Spatula</li>
              <li>1 Product Booklet</li>
            </ul>
          </div>
          
          <hr />

          <div>
            <div className="d-flex align-items-center">
              {AMB}
            </div>
            <b>Total amount: ₹.19,999</b> /- <cite>(Inclusive all taxes)</cite><br/>
            <small className="d-block">(Rupees Ninteen thousand nine hundred and ninety nine)</small>
            <p>
              <small>Free shipping inside India</small> | 
              <small>Expected arrival date: {this.pageContent.ship}</small>
            </p>
          </div>
      </>
    )
  }

  product(){
    return(
      <>
        <div className="">
          <b className="text-uppercase" dangerouslySetInnerHTML={{ __html: this.pageContent.name }} />
          <small className="d-block w-100">
            <span>Seller</span>      : {this.pageContent.seller_information}
          </small>

          <div className="d-block my-2">
            <div className="d-flex align-items-center">
              <b>Select pack</b>
              <div className="variant-button">
                <Button onClick={() => this.setTab(12)} className={this.state.tab === 12?'a':''}>12 Month</Button>
                <Button onClick={() => this.setTab(3)} className={this.state.tab !== 12?'a':''}>3 Month</Button>
              </div>
              <div className="stock">
                {this.pageContent.stock > 0?<strong className="text-success">In stock <FaCheckCircle/> </strong>:<strong className="text-danger">Out of stock</strong>}
              </div>
            </div>
          </div>

          {this.variant()}

          {this.buyButtom()}

          <div className="d-flex mt-3 align-items-top w-100 my-2">
              <div className="d-block w-50">
                <small style={{fontSize: '70%'}}>{this.pageContent.youtube}</small>
              </div>
              <div className="mx-1">
                {this.popPoly()}
              </div>

              <div className="mx-1">
                {this.popShipp()}
              </div>
          </div>

        </div>
      </>
    )
  }

  content() {
    return(
      <div className="main-container py-4 np-page">

        <Container fluid>
          
          <Row className="align-items-center no-gutters">
            <Col md="7" sm="auto" className="pr-md-5">
              <Gallery2 variant={this.state.tab === 12} page={this.pageContent} img={this.pageContent.photo} _3dFor="2" gallery={this.gallery()} />
            </Col>

            <Col md="5" sm="auto">
              <span className="text-uppercase">Product summary</span>
              {this.product()}
            </Col>
          </Row>
        </Container>

      </div >
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}

export default ProductPage;