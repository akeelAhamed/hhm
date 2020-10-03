import React from "react";
import { Row, Col } from "react-bootstrap";
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
      <div className="main-container h-page">

        <div className="mx-3">
          <p className="b-absolute">{this.pageContent.sliders[0].details_text}</p>
          <img className="img-fluid w-100" alt="banner" src={this.pageContent.sliders[0].photo} />
        </div>

        <div className="mx-3 my-mdnew">
          <Row className="no-gutters">
            <Col md="5" className="m-auto d-none d-md-block">
              <img className="img-fluid w-100" alt="banner" src={this.pageContent.about_home.photo} />
            </Col>

            <Col md="7" className="p-4 mt-md-3">
              <h2 className="border-teal text-uppercase" dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.title }} />
              <p dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.link }} />
            </Col>
          </Row>
        </div>

        <div className="mx-3 my-mdnewimage" style={{backgroundImage: 'url('+this.pageContent.feature_products[0].photo+')'}}>
          <Row className="no-gutters" >
           <Col md="5" className="m-auto">
              <img className="img-fluid d-sm-none w-100" alt="banner" src={require('./Img/bg.jpg')} />
           </Col>

          <Col md="7" className="p-text mt-md-3">
              <p dangerouslySetInnerHTML={{ __html: this.pageContent.feature_products[0].details }} />
            </Col>
          </Row>
        </div>

        <div className="mx-3">
          <Row>
            <Col md="5" className="m-auto">
              <h3 className="border-teal text-uppercase ml-4 mt-2 d-block d-md-none" dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.title }} />
              <img className="img-fluid w-100" alt="banner" src={this.pageContent.about_author.photo} />
            </Col>

            <Col md="7" className="p-4 mt-md-3">
              <h3 className="border-teal text-uppercase d-none d-md-block" dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.title }} />
              <p dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.link }} />
            </Col>

          </Row>
        </div>
      </div >
    );
  }

  render(){
    return !this.state.pageLoaded?this.prePage():this.content();
  }
}
