import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGooglePlus, FaTwitter, FaLinkedin } from "react-icons/fa";
import BaseComponent from '../BaseComponent';
import './custom.css';

export default class HomePage extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {

    this.social = {
      "facebook": {
        name: 'Facebook',
        icon: <FaFacebook />
      },
      "gplus": {
        name: 'Google +',
        icon: <FaGooglePlus />
      },
      "twitter": {
        name: 'Twitter',
        icon: <FaTwitter />
      },
      "linkedin": {
        name: 'LinkedIn',
        icon: <FaLinkedin />
      }
    }

    return (
      <div className="main-container">

        <div className="ml-3 mr-3">
          <p className="b-absolute">{this.pageContent.sliders[0].details_text}</p>
          <img className="img-fluid w-100" alt="banner" src={this.pageContent.sliders[0].photo} />
        </div>

        <Container fluid className="my-mdnew">
          <Row className="no-gutters">
            <Col md="5" className="m-auto">
              <img className="img-fluid w-100" alt="banner" src={this.pageContent.about_home.photo} />
            </Col>

            <Col md="7" className="p-4 mt-md-3">
              <h3 className="border-teal text-uppercase pl-4" dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.title }} />
              <p className="pl-4 ml-1"><small dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.link }} /></p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bpart" style={{backgroundImage: 'url('+this.pageContent.feature_products[0].photo+')'}}>
          <Row>
            <Col md="12" className="m-auto">
              <div className="content">
                <small className="pl-3 d-block mb-3" dangerouslySetInnerHTML={{ __html: this.pageContent.feature_products[0].details }} />
              </div>
              <img className="img-fluid w-100" alt="banner" style={{visibility: 'hiddens'}} src={this.pageContent.feature_products[0].photo} />
            </Col>
          </Row>
        </Container>
        
        <Container fluid>
          <Row>
            <Col md="5" className="m-auto">
              <img className="img-fluid w-100" alt="banner" src={this.pageContent.about_author.photo} />
            </Col>

            <Col md="7" className="p-4 mt-md-3">
              <h3 className="border-teal text-uppercase pl-4" dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.title }} />
              <p className="pl-2 ml-1"><small dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.link }} /></p>
            </Col>

          </Row>
        </Container>
      </div >
    );
  }

  render(){
    return !this.state.pageLoaded?this.prePage():this.content();
  }
}
