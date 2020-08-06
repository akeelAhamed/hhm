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

    this.buy = this.buy.bind(this);
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
            <Button className="btn btn-primary" onClick={this.buy}>Buy</Button>
            </InputGroup.Append>
          </InputGroup>
      );
    }
    return(<Link className="mt-3 btn btn-primary" to="/login">Login & buy</Link>);
  }

  content() {
    return(
    <div className="main-container">

        <div className="home-bg-1 ml-3 mr-3">
          <p>{this.pageContent.name}</p>
        </div>

        <Container fluid>
          <Row className="no-gutters">
            <Col xl md lg="6" sm="auto" >
              <img className="img-fluid" alt="" src={this.pageContent.photo} />
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto p-3">
              <h5 className="text-uppercase border-teal"> {this.pageContent.name} </h5>
              <div dangerouslySetInnerHTML={{ __html: this.pageContent.details }} /><br />
              {this.buyButtom()}
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-gray">
          <Row>
            <Col xl md lg="6" sm="auto" className="m-auto">
              <div className="d-flex flex-column align-items-center">

                <img className="img-fluid align-self-start m-1" alt="girl" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
                <img className="img-fluid align-self-end m-1" alt="boy" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 06.jpg')} />
                <img className="img-fluid align-self-start m-1" alt="girl" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
              </div>
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto" >
              <h5 className="border-teal text-uppercase">Success Stories <br /> a scientific way of living </h5>
              <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
              <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
              <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
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