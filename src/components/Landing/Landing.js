import React from "react"
import { Button,Modal,Form } from 'react-bootstrap';
import BaseComponent from '../BaseComponent';
import "./custom.css";

export default class Landing extends BaseComponent {
  constructor(props) {
    super();
    this.state.modal   = false;
    this.state.brocher = !false;
    this.state.email   = '';
    this.state.name    = '';
    this.state.phone   = '';
    this.handleModal = this.handleModal.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
  }

  handleModal(){
    this.setState({modal: !this.state.modal});
  }

  afterSubmit(e){
    e.preventDefault();
    this.setState({brocher: true, modal:false, email: '',name: '', phone: ''});
    setTimeout(() => {
      document.getElementById('download').click();
      setTimeout(() => {
        this.setState({brocher: false});
      }, 1500);
    }, 1500);
  }

  content(){
    return (
      <div className="l-container">
        <span onClick={this.handleModal} className="fix e-brocher"></span>
        <span className="fix k-more">k-more</span>
        <span className="fix b-now">b-now</span>
        
        <img alt="page" src={require('./img/landing.jpg')} className='img-fluid' />
        
        <Modal show={this.state.modal} onHide={this.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Download E-brocher</Modal.Title>
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
                {this.state.disabled?'Downloading':'Download'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>        
      </div>
    );
  }

  thankyou(){
    return(
      <div className="main center">
        <a id="download" href="/PURE-PRODUCT-BOOK-2.pdf" download className="d-none">.</a>
        <div className="main-content text-left">
          <img src={require('../Shop/img/tick.png')} alt="tick" style={{width:35}} className="img-fluid" /><h1 className="w-100" style={{color: '#7ac043'}}>THANK YOU</h1>
          <p className="b-left border-teal">
            For downloading E-brocher.<br/> Go to <a className="text-dark border-bottom" href="/">Home</a>
          </p>
        </div>
      </div>
    )
  }

  render(){
    return (this.state.brocher)?this.thankyou():this.content();
  }
}