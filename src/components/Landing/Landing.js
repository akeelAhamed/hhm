import React from "react"
import { Row, Col, Container, Navbar, Nav, Button,Modal,Form } from 'react-bootstrap';
import map from "lodash/map";
import Gallery from "../ProductPage/Gallery";
import { BsDownload, BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import BaseComponent from '../BaseComponent';
import "./custom.css";

export default class Landing extends BaseComponent {
  constructor(props) {
    super();
    this.state.modal   = false;
    this.state.brocher = false;
    this.state.email   = '';
    this.state.name    = '';
    this.state.phone   = '';
    this.state.current = '';
    this.state._3d     = [
        {
          img : require('../Products/img/Product-Page-03a-Pure.png'),
          file: '02',
        },
        {
          img : require('../Products/img/Product-Page-03b-Lamp-02.png'),
          file: '02'
        },
        {
          img : require('../Products/img/Product-Page-03c-Sachets.png'),
          file: '02'
        },
        {
          img : require('../Products/img/Product-Page-03d-Spatula.png'),
          file: '02'
        },
    ];
    this.imageType = ['back_ground', 'product', 'another', 'top','followup'];
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
      <div className="main-container">
        <Navbar className="top w-100">
          <a href="/" className="nav-link"><img src="https://admin.hhmworld.com/assets/images/1597139716Webp.net-resizeimage (4).png" height="50" className="d-inline-block align-top" alt="logo" /></a>

          <Nav className="m-auto bg-light w-100">
            <Button variant="secondary" size="sm"  onClick={this.handleModal}>E-Brocher &nbsp;&nbsp; <BsDownload /></Button>
            <Nav.Link href={"https://wa.me/send?phone=918086511100&text=Hi, i am "+this.state.name+"&source="+this.url()} target="_blank" rel="noreferrer"><FaWhatsapp /></Nav.Link>
            <Nav.Link href="mailto:support@hhmworld.com"><BsEnvelopeFill /></Nav.Link>
            <Nav.Link href="tel:918086511100"><FaPhoneAlt /></Nav.Link>
            <Nav.Link href="tel:918086511100" className="">+91 80865 11100</Nav.Link>
          </Nav>
        </Navbar>

        <div className="landing">
          <img alt="top" className="w-100 img-fluid" src={require('./img/Landing-01.png')} />
          <a className="btn btn-primary" href={"#buy"}>Buy now</a>
        </div>
        
        <div className="landing-2 mb-2">
          <div className="text">
            <h3 className="text-uppercase border-teal color-primary" >
              HOLISTIC<br/>
              HUMAN METAPHYSICS<br/>
              A SCIENTIFIC WAY OF LIFE
            </h3>
            <br />
            <div className="small">
              <p>
              HHM leads you to ultimate  happiness and wellness, by utilizing the planetary energies for betterment of our lives. The importance of intangible forces around us that affect our life is seldom focused upon. T.P. Jayakrishnan, the brain behind HHM, wishes to harness the attraction of the scientific community towards the evidence that holds these hypotheses and investigate further on them.

              Holistic Human Metaphysics opens the door to infinite possibilities that could very well lead to the dawn of a new era in the field of healthcare. The HHM profound methods of HHM has helped it's followers in leading a fruitful and successful life.

              Holistic Human Metaphysics guides you towards a different perspective of life, where you attain a simpler, better wellness lifestyle. Even though our physical body is important, the effect of intangible energy around us is no lesser. Holistic Human Metaphysics aids in the flow of positive energy throughout the body and mind to lead a holistic lifestyle and well being.
              </p>
            </div>
          </div>
        </div>

        <div className="landing-2 mb-2" style={{backgroundImage: 'url('+require('./img/Landing-03.png')+')'}}>
          <div className="text">
            <h3 className="text-uppercase border-teal color-primary" >
              HHM PURE -<br/>
              RE ENERGING YOUR LIFE
            </h3>
            <br />
            <div className="small">
              <p>
              The balance of energy in the seven important energy points or the chakras is essential for the complete well being of your mind and body. And HHM presents the perfect product that helps you achieve that balance- HHM PURE ie, Panacea Ultimate for Rousing Energy. The daily practice of PURE attracts, absorbs and directs cosmic energy that travels to the brain and revives the chakras, energising your mind and body.

              Agnihothra- the ancient energizing ritual
              Agnihotra is an ancient Vedic ritual, which purifies and re-energises nature. Brown rice, ghee from cow's milk and cow dung  are offered to fire lighted in an inverted copper pyramid at sunrise and sunset. Specific mantras are chanted for dawn and dusk. Performing this ritual daily is said to provide many health benefits and keep you mindful at all times.

              HHM PURE brings the goodness of Agnihotra to your homes, filling you with boundless positive energy. Fumes liberating from the burning of  PANCEA ULTIMATE  in the PURE pyramid contains superior healing properties, which not only cleanses the air, but also your body and mind. The daily fumigation of PANCEA ULTIMATE is believed to form a protective layer over your surroundings.

              </p>
            </div>
          </div>
        </div>

        <div className="landing-3 landing-2 mb-2 bg-gray py-3" style={{backgroundImage: 'url('+require('./img/Landing-04.png')+')'}} id="buy">
          <Container>
            <Row className="_3d">
              <Col lg="5" md="6">
                <Gallery img={this.state._3d[0].img} gallery={map(this.state._3d, 'img')} _3d={this.state._3d}/>
              </Col>
              
              <Col lg="7" md="6">
                <h3 className="text-uppercase color-primary" >
                  Panacea Ultimate for<br/>
                  Rousing Energy
                </h3>

                <div className="home-bg-2-text">
                  <div>
                  Inspired from ancient traditions developed by great scholars of the past, H.H.M brings you Panacea Ultimate for Rousing Energy (P.U.R.E), a smoke therapy that will make you feel alive from within. Cosmic energy strikes the earth from all directions. The process of P.U.R.E helps to attract, absorb, and direct cosmic energy to travel towards the brain and energize the seven chakras in the body. P.U.R.E package contains the PANACEA ULTIMATE powder which is a mixture of 43 different herbs with tremendous health benefits. This smoke therapy has created many people to live their life with utmost potential and the well being of a holistic lifestyle. The theories that are set out to a benefit that humans could gain are set out by HHM so that people can live the complete while they achieve a perfect goal-oriented life to make a difference in the nature and in the lifestyle.  It can be smoked at anytime in your living room/any part of your house regardless of religion anyone can use the P.U.R.E to elevate their life.
                  </div>
                  <a className="mt-3 btn btn-primary" href={"/products"}>Buy now</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="landing-4 mb-2 mx-2">
          <h2 className="text-uppercase color-primary font-weight-bold" >
            BENEFITS OF P.U.R.E SMOKE THERAPY
          </h2>
          <Row>
              <Col md="4">
                <ul>
                  <li>Breaks addictions</li>
                  <li>Energizes the chakras</li>
                  <li>Improves focus</li>
                  <li>Enhances memory</li>
                </ul>
              </Col>

              <Col md="6">
                <ul>
                  <li>Purifies air</li>
                  <li>Heals respiratory disorders</li>
                  <li>Eliminates free radicals</li>
                  <li>Has anti-inflammatory and antioxidant effects</li>
                  <li>Absorbs cosmic energy</li>
                </ul>
              </Col>
          </Row>
        </div>

        <div className="landing-5 py-4" >
          <p className="text-center" >
            &copy; {new Date().getFullYear()} HHM WORLD. All rights reserved.
          </p>
        </div>

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