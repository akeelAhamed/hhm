import React from "react";
import BaseComponent from '../BaseComponent';
import "./custom.css";
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import has from "lodash/has";

class ProductPage extends BaseComponent {
  constructor(props) {
    super();

    this.state.qty = 1;
    this.state.availability = '';
    this.buy = this.buy.bind(this);
    this.toCart = this.toCart.bind(this);
    this.qtyClick = this.qtyClick.bind(this);
  }

  /**
   * Cart added and checkout
   * 
   * @param {object} e 
   */
  buy(e){
    this.addCart(this.pageContent, this.state.qty);
    return this.redirect('cartpage');
  }

  /**
   * Cart added and checkout
   * 
   * @param {object} e 
   */
  toCart(e){
    console.log(e);
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
    if(this.state.isLoggedIn){
      if(this.pageContent.stock <= 0){
        return(<span className="text-danger">Out of stock</span>);
      }

      return(
          <InputGroup className="buy">
            <InputGroup.Prepend onClick={this.qtyClick}>
              <InputGroup.Text data-qty="0" className="btn">-</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className="text-center" aria-label="Quantity" value={this.state.qty} readOnly />
            <InputGroup.Append onClick={this.qtyClick}>
              <InputGroup.Text data-qty="1" className="btn">+</InputGroup.Text>
            </InputGroup.Append>
            <InputGroup.Append>
            <Button className="btn btn-primary" onClick={this.buy}>Buy now</Button>
            </InputGroup.Append>
            <small>Secure transaction</small>

            <input type="number" name="availability" placeholder="Enter pincode"/>
            <span>{this.state.availability}</span>
          </InputGroup>
      );
    }
    return(<Link className="mt-3 btn btn-primary" to={"/login?item/"+this.pageContent.slug}>Login & buy</Link>);
  }

  content() {

    return(
      <div className="main-container py-4">

        <Container fluid>
          <Row className="no-gutters">
            <Col md="6" sm="auto" className="">
              <strong className="text-uppercase border-teal"> {this.pageContent.name} </strong>
              <img className="img-fluid border-teal-top" alt="" src={this.pageContent.photo} />
            </Col>

            <Col md="1"></Col>

            <Col md="5" sm="auto">
              <strong className="text-uppercase border-teal">Product summary</strong>
              <div className="border-teal-top px-2 mt-3">
                <b className="text-uppercase border-teal"> {this.pageContent.name} </b>
                <div>
                  <small>One year pack</small><br/>
                  <b>Total amount: RS.{this.pageContent.price}</b> /- <cite>(Inclusive of all tax)</cite><br/>
                  <small>Free shipping inside india</small>
                </div>
                
                <hr/>

                <div dangerouslySetInnerHTML={{ __html: this.pageContent.details }} /><br />
                {this.buyButtom()}

                <hr/>

                <div>
                  {this.pageContent.stock > 0?<span className="text-success">In stock</span>:<span className="text-danger">Out of stock</span>}
                  <div dangerouslySetInnerHTML={{ __html: this.pageContent.policy }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="home-bg-3">
          <h3 className="m-3"><span className="border-teal"> Videos </span></h3>
          <div className="d-flex flex-column align-items-end player">
            <ReactPlayer className="m-3" controls url={this.pageContent.youtube} />
          </div>
        </div>

      </div >
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}

export default ProductPage;