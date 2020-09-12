import React from "react"
import { Button,Modal,Form, Row, Col, Container } from 'react-bootstrap';
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
    const date = new Date();

    return (
      <div className="l-container">
        <ul className="fix contact">
          <li className="hr"></li>
          <li><a href="mailto:support@hhmworld.com">Email</a></li>
          <li><a rel="noreferrer" href="https://wa.me/918086511100?text=Hi, i am&source=https://hhmworld.com/">Whatsapp</a></li>
          <li><a href="tel:918086511100">Call</a></li>
        </ul>
        
        <Container fluid className="p-0 top w-100">
          <img alt="banner" src={require('./img/banner.jpg')} className='img-fluid w-100' draggable={false} />
          <img alt="HHM-logo" src={require('./img/HHM-logo.svg')} className='img-fluid h-logo' draggable={false} />
        </Container>

        <div className="hrw"></div>

        <Container className="section lamp">
          <h1>Benefits</h1>
          <Row>
            <Col md="12">
              <section class="timeline">
                <ul>
                  <li className="d-none"></li>
                  <li>
                    <div class="content">
                      <p>Induces Anti-inflammatory and Antioxidant Effects</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Scavenges Free Radicals against Anti-Aging</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Heals Chronic Respiratory Tract Disorders</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Generating Neuro-modulators to Enhances Memory</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Breaks Addiction to induce Mental Tranquility</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Purifies Air by Killing Bacteria</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <p>Energises Seven Chakras</p>
                    </div>
                  </li>
                </ul>
              </section>

              <img alt="lamp-min" src={require('./img/lamp-min.png')} className='img-fluid mb-3' draggable={false} />
            </Col>
            <Col md="12">
              <button className="btn btn-border" onClick={this.handleModal}>download broucher</button>
            </Col>
          </Row>
        </Container>

        <Container className="section">
          <h1>fuming the inverted copper pyramid</h1>
          <Row>
            <Col md="6">
              <img alt="banner" src={require('./img/Pure-Tray-Top-View-01.png')} className='img-fluid' draggable={false} />
            </Col>
            <Col md="6">
              <p>
              The inverted pyramid made out of pure copper shaped with specific dimensions is capable of trapping universal cosmic energy. Fuming PURE powder in it spreads it out, creating a protective layer which enhances your immunity.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="section">
          <h1>the exotic pure powder</h1>
          <Row>
            <Col md="6">
              <img alt="Pure-Sachet" src={require('./img/Pure-Sachet.png')} className='img-fluid' draggable={false} />
            </Col>
            <Col md="6">
              <p>
              43 natural ingredients are meticulously handpicked- at special hours when various planetary energies have stronger influence on earth. They are pulverized at specific ratios to form the exotic PURE powder. There are 12 boxes in the package with 30 sachets in each. One sachet can be used for a  day.
              </p>
            </Col>
            <Col md="12">
              <button className="btn btn-border" onClick={this.handleModal}>Know more</button>
            </Col>
          </Row>
        </Container>

        <Container className="section">
          <h1>PROTECTION FOR A YEAR</h1>
          <Row>
            <Col md="6">
              <img alt="Pure-Product" src={require('./img/Pure-Product.png')} className='img-fluid' draggable={false} />
            </Col>
            <Col md="6">
              <p>
              There are 12 boxes in the package with 30 sachets in each. One sachet can be used for a  day. PURE can be fumed once in a day for an entire year  at any time or any place of your choice. Physical. Mental and spiritual wellness for you and your loved ones can be assured for 12 months.
              </p>
            </Col>
            <Col md="12">
              <a className="mt-3 btn btn-buy btn-lg" href={"/item/hhm-pure-panacea-ultimate-for-rousing-energy-hhm00100"}>Buy now</a>
            </Col>
          </Row>
        </Container>

        <Container className="ppfooter text-center p-md">
          <h1>Magic of science</h1>
          <p>HHM is the science of life which elevates you. The universal energy around us is so powerful. HHM helps in tapping and using it for gaining health, wealth and happiness.</p>
        </Container>

        <div className="pfooter text-center">
          <img alt="page" src='https://admin.hhmworld.com/assets/images/1597139716Webp.net-resizeimage%20(4).png' className='img-fluid' />
          <p>&copy; {date.getFullYear()} HHM WORLD. All rights reserved.</p>
        </div>

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