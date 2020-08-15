import React from "react";
import { Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import has from "lodash/has";
import BaseComponent from '../BaseComponent';
import Gallery from './Gallery';
import "./custom.css";
import { Link } from "react-router-dom";

class ProductPage extends BaseComponent {
  constructor(props) {
    super();

    this.state.qty = 1;
    this.state.availability = '';
    this.buy = this.buy.bind(this);
    this.loginBuy = this.loginBuy.bind(this);
    this.toCart = this.toCart.bind(this);
    this.qtyClick = this.qtyClick.bind(this);
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
      if(e.target.dataset.qty === "1"){
        this.setState({
          qty: ++this.state.qty
        })
      }else if(this.state.qty > 1){
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
              <Button className="btn btn-primary rounded" onClick={this.buy}>Buy now</Button>
              {
                (this.cart === '')
                ?<Button className="btn btn-primary rounded ml-1" onClick={this.toCart}>Add to cart</Button>
                :<Link className="btn btn-primary rounded ml-1" to="/cart">Cart</Link>
              }
            </InputGroup.Append>

            <div className="d-block w-100 my-2">
              <small>Secure transaction</small>
              <small className="ml-2">EMI</small>
            </div>

            {/* <input type="number" className="border pl-2 d-block w-100" name="availability" placeholder="Enter pincode"/> */}
            <span>{this.state.availability}</span>
          </InputGroup>
      );
    }
    return(<Button className="mt-3 btn btn-primary" onClick={this.loginBuy} data-to={"login?checkout"}>Login & buy</Button>);
  }

  content() {
    return(
      <div className="main-container py-4">

        <Container fluid>
          <h5 className="text-uppercase border-teal"> {this.pageContent.name} </h5>
          <Row className="no-gutters">
            <Col md="6" sm="auto" className="">
              <strong className="text-uppercase">Gallery</strong>
              <div className="border-teal-top px-2">
                <Gallery img={this.pageContent.photo} gallery={this.pageContent.gallery.split(',')} />
              </div>
            </Col>

            <Col md="1"></Col>

            <Col md="5" sm="auto">
              <strong className="text-uppercase">Product summary</strong>
              <div className="border-teal-top px-2">
                <b className="text-uppercase border-teal"> {this.pageContent.name} </b>
                <p>
                  <span>Seller</span>      : {this.pageContent.seller_information}
                </p>
                <div className="d-flex">
                  <span>Pack contain</span> : 
                  <ul className="ml-1" style={{listStyle: "none"}}>
                    {
                      this.pageContent.size.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))
                    }
                  </ul>
                </div>
                <p>Total weight: {this.pageContent.views}</p>
                
                <hr />

                <div>
                  <small>One year pack</small><br/>
                  <p>Qty:<span data-qty="0" onClick={this.qtyClick} className="btn">-</span><span className="px-2 py-1 border">{this.state.qty}</span><span data-qty="1" onClick={this.qtyClick}className="btn">+</span></p>
                  <b>Total amount: RS.{this.pageContent.price}</b> /- <cite>(Inclusive of all tax)</cite><br/>
                  <small>Free shipping inside india</small>
                </div>
                
                <hr/>

                {this.buyButtom()}

                <div>
                  {this.pageContent.stock > 0?<span className="text-success">In stock</span>:<span className="text-danger">Out of stock</span>}
                  {/* <br/>
                  <small>{this.pageContent.youtube}</small> */}
                  <hr/>
                  {/* <div dangerouslySetInnerHTML={{ __html: this.pageContent.details }} /> */}
                  <div className="pl-3">
                    <ul>
                      <li>
                        Inspired from ancient traditions developed by great thinkers of the past,H.H.M brings you Panacea Ultimate for Rousing Energy (P.U.R.E),a smoke therapy which will make you feel alive from within.
                      </li>
                      <li>
                        Cosmic energy strikes the earth from all directions. The process of P.U.R.E helps to attract, absorb, and direct cosmic energy to travel towards the brain and energize the seven major energy centres (chakras) in the human body.
                      </li>
                      <li>
                        P.U.R.E package contains the PANACEA ULTIMATE powder which is a mixture of 43 different herbs with tremendous health benefits.
                      </li>
                      <li>
                        Inhaling the medicinal fumes leaves you fresh, calm, and revived.Elevate your life in a holistic way filled with joy and peace.
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
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