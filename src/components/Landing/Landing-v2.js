import React from "react"
import { Button,Modal,Form } from 'react-bootstrap';
import BaseComponent from '../BaseComponent';
import "./custom.css";

export default class Landing extends BaseComponent {
  constructor(props) {
    super();
    this.mr = undefined;
    this.state.modal   = false;
    this.state.email   = '';
    this.state.name    = '';
    this.state.phone   = '';
    this.handleModal = this.handleModal.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
  }

  handleModal(e){
    this.mr = e.target.dataset.href;
    this.setState({modal: !this.state.modal});
  }

  afterSubmit(e){
    e.preventDefault();
    if(this.mr === undefined){
      document.getElementById('download').click();
      this.setState({modal:false, email: '',name: '', phone: ''});
      setTimeout(() => {
        window.location.href = '/promo/thankyou';
      }, 2500);
    }else{
      window.location.href = this.mr;
    }
  }

  content(){
    const img = window.innerWidth > 600?require('./img/landing.jpg'):require('./img/landing_mobile.jpg');
    return (
      <div className="l-container">
        <ul className="fix contact">
          <li className="hr"></li>
          <li><a href="mailto:support@hhmworld.com">Email</a></li>
          <li><a rel="noreferrer" href="https://wa.me/918086511100?text=Hi, i am&source=https://hhmworld.com/">Whatsapp</a></li>
          <li><a href="tel:918086511100">Call</a></li>
        </ul>
        <span onClick={this.handleModal} className="fix e-brocher"></span>
        <span onClick={this.handleModal} data-href="/products" className="fix k-more">&nbsp;</span>
        <a href="/item/hhm-pure-panacea-ultimate-for-rousing-energy-hhm00100" className="fix b-now">&nbsp;</a>
        
        <img alt="page" src={img} className='img-fluid' draggable={false} />
        <a id="download" href="/PURE-PRODUCT-BOOK-2.pdf" download className="d-none">.</a>
        
        <Modal show={this.state.modal} onHide={() => this.setState({modal: !this.state.modal})}>
          <Modal.Header closeButton>
            <Modal.Title>Know more</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="lform" data-action="brocher" data-method="post" data-callback="afterSubmit" onSubmit={this.afterSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Control placeholder="Enter Name" name="name" onChange={this.onChange} value={this.state.name} required/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Control type="number" name="phone" onChange={this.onChange} value={this.state.phone} placeholder="Enter phone number" required/>
              </Form.Group>

              <Button variant="secondary" type="submit" disabled={this.state.disabled}>
                {this.state.disabled?'Loading...':'Submit'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>        
      </div>
    );
  }

  render(){
    return this.content();
  }
}