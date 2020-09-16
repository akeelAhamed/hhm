import React from "react";
import { Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import has from "lodash/has";
import BaseComponent from '../BaseComponent';
import Gallery from './Gallery';
import "./custom.css";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

class ProductPage extends BaseComponent {
  constructor(props) {
    super();

    this.cart = this.getCart();
    this.state.qty = (this.cart !== '')?this.cart._qty:1;
    this.state.availability = '';
    this.days  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
              <Button className="btn btn-primary rounded" onClick={this.buy}>Buy now</Button>
              {
                (this.cart === '')
                ?<Button className="btn btn-primary rounded ml-1" onClick={this.toCart}>Add to cart</Button>
                :<Link className="btn btn-primary rounded ml-1" to="/cart">Cart</Link>
              }
            </InputGroup.Append>

            <div className="d-block w-100 my-2">
              <small> <FaLock /> Secure transaction</small>
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
    // let d = new Date();
    // d.setDate(d.getDate() + parseInt(this.pageContent.ship));
    // this.days[d.getDay()]+', '+d.getDate()+','+this.months[d.getMonth()]+' - '+d.getFullYear()
    return(
      <div className="main-container py-4">

        <Container fluid>
          <h5 className="border-teal text-uppercase pl-2" dangerouslySetInnerHTML={{ __html: this.pageContent.name }} />
          <Row className="no-gutters">
            <Col md="6" sm="auto">
              <strong className="text-uppercase">Gallery</strong>
              <div className="border-teal-top px-2">
                <Gallery img={this.pageContent.photo} _3dFor="1" gallery={this.pageContent.gallery.split(',')} />
              </div>
            </Col>

            <Col md="1"></Col>

            <Col md="5" sm="auto">
              <strong className="text-uppercase">Product summary</strong>
              <div className="border-teal-top px-2">
                <b className="text-uppercase border-teal" dangerouslySetInnerHTML={{ __html: this.pageContent.name }} />
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
                  <p>Qty:<span data-qty="0" onClick={this.qtyClick} className={(this.state.qty > 1)?"btn":"btn disabled"}>-</span><span className="px-2 py-1 border">{this.state.qty}</span><span data-qty="1" onClick={this.qtyClick}className={(this.state.qty < 7)?"btn":"btn disabled"}>+</span></p>
                  <b>Total amount: RS.{this.pageContent.price}</b> /- <cite>(Inclusive of all tax)</cite><br/>
                  <small className="d-block">Free shipping inside india</small>
                  <small className="d-block">Expected arrival date: {this.pageContent.ship}</small>
                </div>
                
                <hr/>

                {this.buyButtom()}

                <div className="d-flex align-items-center w-100 my-2 color-primary">
                    {this.pageContent.stock > 0?"In stock":<span className="text-danger">Out of stock</span>}

                    <div className="mx-3">
                      Shipping
                      <img
                        src={require('../Products/img/Shipping.png')}
                        width="50"
                        height="50"
                        alt="logo"
                        className="img-fluid px-2"
                      />
                    </div>

                    <div className="mx-3">
                      <img
                        src={require('../Products/img/Refund.png')}
                        width="50"
                        height="50"
                        alt="logo"
                        className="img-fluid px-2"
                      />
                      Refund policy
                    </div>
                </div>


                <div>
                  <small>{this.pageContent.youtube}</small>
                  <hr/>
                  {/* <div dangerouslySetInnerHTML={{ __html: this.pageContent.details }} /> */}
                  <div className="pl-3" dangerouslySetInnerHTML={{ __html: this.pageContent.policy }}/>

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