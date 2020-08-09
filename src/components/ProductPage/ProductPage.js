import React from "react";
import BaseComponent from '../BaseComponent';
import "./custom.css";
import { Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
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

  slider(){
    let slides = document.getElementById('slideshow');
    let imgs = slides.getElementsByTagName('img');
    let imagemSelecionada = document.getElementById('displayed-img');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let counter = 0;

    const goToSlide = (n) => {
      counter = (n + imgs.length) % imgs.length;
      mudaImagem(imgs[counter], n);
    }

    const nextSlide = () => {
      goToSlide(counter + 1);    
    }
    
    const prevSlide = () => {
      goToSlide(counter - 1);
    }

    const mudaImagem = (imagem, index) => {    
      let path = imagem.getAttribute('src');
      imagemSelecionada.setAttribute('src', path);
    }

    const clickImage = (imagem, index) => {
        imagem.addEventListener('click', function(event){
        event.preventDefault();    
        mudaImagem(imagem, index); 
        goToSlide(index);
      });
    }

    
    next.addEventListener('click',nextSlide, false);
    prev.addEventListener('click',prevSlide, false);

    for (let i = 0; i < imgs.length; i++) {
        let index = i;
        let imagem = imgs[i];     
        clickImage(imagem, index);
        //imagem.setAttribute('data-index', index);       
    }
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
            {/* <InputGroup.Prepend onClick={this.qtyClick}>
              <InputGroup.Text data-qty="0" className="btn">-</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className="text-center" aria-label="Quantity" value={this.state.qty} readOnly />
            <InputGroup.Append onClick={this.qtyClick}>
              <InputGroup.Text data-qty="1" className="btn">+</InputGroup.Text>
            </InputGroup.Append> */}
            <InputGroup.Append>
            <Button className="btn btn-primary rounded" onClick={this.buy}>Buy now</Button>
            </InputGroup.Append>
            <small>Secure transaction</small>

            <input type="number" className="border pl-2" name="availability" placeholder="Enter pincode"/>
            <span>{this.state.availability}</span>
          </InputGroup>
      );
    }
    return(<Link className="mt-3 btn btn-primary" to={"/login?item/"+this.pageContent.slug}>Login & buy</Link>);
  }

  content() {
    this.pageContent = {
      "id": 187,
      "sku": "hhm00100",
      "product_type": "normal",
      "affiliate_link": null,
      "user_id": "0",
      "category_id": "10",
      "subcategory_id": null,
      "childcategory_id": null,
      "attributes": null,
      "name": "Aushmath’s PURE (Panacea Ultimate for Rousing Energy)",
      "slug": "aushmaths-pure-panacea-ultimate-for-rousing-energy-hhm00100",
      "photo": "http://www.hhmlife.org/assets/images/products/1596972651sHSHUA4p.png",
      "thumbnail": "1596972653JAI23Uf3.jpg",
      "file": null,
      "size": "",
      "size_qty": "",
      "size_price": "",
      "color": "",
      "price": "100",
      "previous_price": "45000",
      "details": "Aushmath introduces to you the process PURE, viz., Panacea Ultimate for Rousing Energy to realize the complete WELLNESS of one’s mind and body. We adopted certain intelligent dimensions mentioned in Vedic scriptures to materialize the process equipment ‘PURE Pyramid’ (i.e., Inverted Copper Pyramid) employed for the process PURE. Aushmath’s PANACEA ULTIMATE is a perfect blend of natural elements developed for harnessing the best benefits from the widely recognized ‘Smoke Therapy’.<br>",
      "stock": "5139",
      "policy": "<br>",
      "status": "1",
      "views": 168,
      "tags": "",
      "features": [
          "123456"
      ],
      "colors": [
          "#000000"
      ],
      "product_condition": "2",
      "ship": null,
      "is_meta": "0",
      "meta_tag": "",
      "meta_description": null,
      "youtube": "hhh.world",
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
      "created_at": "2020-07-19 05:42:19",
      "updated_at": "2020-08-09 15:12:52",
      "is_discount": "0",
      "discount_date": null,
      "whole_sell_qty": "",
      "whole_sell_discount": "",
      "is_catalog": "0",
      "catalog_id": "0"
    }

    console.log(this.pageContent);
    return(
      <div className="main-container py-4">

        <Container fluid>
          <h5 className="text-uppercase border-teal"> {this.pageContent.name} </h5>
          <Row className="no-gutters">
            <Col md="6" sm="auto" className="">
              <strong className="text-uppercase">Gallery</strong>
              <img className="img-fluid border-teal-top" alt="" src={this.pageContent.photo} />

              {/* <div className="full-img">
                <a href="#!" className="prev"> {"<"} </a>
                <img id="displayed-img" alt='' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg" />
                <a href="#!" className="next"> {">"} </a>
            </div>

            <div id="slideshow">
              <a href="#!">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg" data-index="9" alt="" />
                </figure>
              </a>
              <a href="#!">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg" alt="" />
                </figure>
              </a>
              <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg">
                <figure>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg" alt="" />
                </figure>
              </a>
            </div>
             */}
            </Col>

            <Col md="1"></Col>

            <Col md="5" sm="auto">
              <strong className="text-uppercase">Product summary</strong>
              <div className="border-teal-top px-2">
                <b className="text-uppercase border-teal"> {this.pageContent.name} </b>
                <div dangerouslySetInnerHTML={{ __html: this.pageContent.details }} />
                
                <hr />

                <div>
                  <small>One year pack</small><br/>
                  <p>Qty:-|1|+</p>
                  <b>Total amount: RS.{this.pageContent.price}</b> /- <cite>(Inclusive of all tax)</cite><br/>
                  <small>Free shipping inside india</small>
                </div>
                
                <hr/>

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

        {/* {this.slider()} */}
      </div >
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}

export default ProductPage;