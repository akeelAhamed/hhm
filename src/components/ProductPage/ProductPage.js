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
    this.pageContent2 = {
      "id": 182,
      "sku": "b017277kfm",
      "product_type": "normal",
      "affiliate_link": null,
      "user_id": "13",
      "category_id": "20",
      "subcategory_id": null,
      "childcategory_id": null,
      "attributes": null,
      "name": "Aushmath’s PURE (Panacea Ultimate for Rousing Energy)",
      "slug": "aushmaths-pure-panacea-ultimate-for-rousing-energy-b017277kfm",
      "photo": "http://www.hhmlife.org/assets/images/products/1590833457o6hrPCRT.png",
      "thumbnail": "http://www.hhmlife.org/assets/images/thumbnails/1590833462u0g2H1te.jpg",
      "file": null,
      "size": [
          "S"
      ],
      "size_qty": [
          "2147483643"
      ],
      "size_price": [
          "20"
      ],
      "color": [
          "#000000",
          "#851818",
          "#ff0d0d",
          "#1feb4c",
          "#d620cf",
          "#186ceb"
      ],
      "price": "100",
      "previous_price": "200",
      "details": "<p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><font color=\"#000000\"><b>PURE</b></font></p><p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><font color=\"#000000\">Aushmath introduces to you the process PURE, viz., Panacea Ultimate for Rousing Energy to realize the complete WELLNESS of one’s mind and body. We adopted certain intelligent dimensions mentioned in Vedic scriptures to materialize the process equipment ‘PURE Pyramid’ (i.e., Inverted Copper Pyramid) employed for the process PURE. Aushmath’s PANACEA ULTIMATE is a perfect blend of natural elements developed for harnessing the best benefits from the widely recognized ‘Smoke Therapy’.</font></p><p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: \" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><br></p>",
      "stock": null,
      "policy": "<p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><font color=\"#000000\">Return Policy</font></p>",
      "status": "1",
      "views": 36,
      "tags": [
          "clothing",
          "bag"
      ],
      "features": "",
      "colors": "",
      "product_condition": "2",
      "ship": "5-7 days",
      "is_meta": "0",
      "meta_tag": [
          "clothing",
          "bag",
          "js",
          "css",
          "php"
      ],
      "meta_description": "clothing, bag",
      "youtube": "https://www.youtube.com/watch?v=HxNydN5tScI",
      "type": "Physical",
      "license": "",
      "license_qty": "",
      "link": null,
      "platform": null,
      "region": null,
      "licence_type": null,
      "measure": null,
      "featured": "1",
      "best": "0",
      "top": "0",
      "hot": "0",
      "latest": "0",
      "big": "0",
      "trending": "0",
      "sale": "0",
      "created_at": "2019-10-11 21:48:06",
      "updated_at": "2020-08-05 17:27:25",
      "is_discount": "0",
      "discount_date": null,
      "whole_sell_qty": [
          "10",
          "20",
          "30",
          "40"
      ],
      "whole_sell_discount": [
          "5",
          "10",
          "15",
          "20"
      ],
      "is_catalog": "0",
      "catalog_id": "99"
    }

    this.state.qty = 1;

    this.buy = this.buy.bind(this);
    this.qtyClick = this.qtyClick.bind(this);
    console.log(this.pageContent2);
  }

  /**
   * Cart added and checkout
   * 
   * @param {object} e 
   */
  buy(e){
    this.addCart(this.pageContent2, this.state.qty);
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
          <p>{this.pageContent2.name}</p>
        </div>

        <Container fluid>
          <Row className="no-gutters">
            <Col xl md lg="6" sm="auto" >
              <img className="img-fluid" alt="" src={this.pageContent2.photo} />
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto p-3">
              <h5 className="text-uppercase border-teal"> {this.pageContent2.name} </h5>
              <div dangerouslySetInnerHTML={{ __html: this.pageContent2.details }} /><br />
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
            <ReactPlayer className="m-3" controls url={this.pageContent2.youtube} />
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