import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import BaseComponent from '../BaseComponent';
import './custom.css';

export default class HomePage extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div className="main-container">

        <div className="ml-3 mr-3">
          <p className="b-absolute">{this.pageContent.sliders[0].details_text}</p>
          <img className="img-fluid w-100" alt="banner" src={this.pageContent.sliders[0].photo} />
        </div>

        <Container fluid className="my-md-2">
          <Row className="no-gutters">
            <Col md="5">
              <img className="img-fluid w-100" alt="banner" src={this.pageContent.about_home.photo} />
            </Col>

            <Col md="7" className="p-4 mt-md-5">
              <h5 className="border-teal text-uppercase pl-4" dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.title }} />
              <p className="pl-4 ml-1"><small dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.link }} /></p>
            </Col>
          </Row>
        </Container>

        <div className="bpart" style={{backgroundImage: 'url('+this.pageContent.feature_products[0].photo+')'}}>
          <div className="content">
            <h4 className="text-uppercase border-teal pl-3"> {this.pageContent.feature_products[0].name} </h4>
            <small className="pl-3 d-block" dangerouslySetInnerHTML={{ __html: this.pageContent.feature_products[0].details }} /><br />
            <Link className="mt-3 btn btn-primaryhome" to={"/item/"+this.pageContent.feature_products[0].slug}>Buy now</Link>
          </div>
          <img className="img-fluid w-100" alt="banner" src={this.pageContent.feature_products[0].photo} />
        </div>

        <Container fluid>
          <Row>
            <Col md lg xl="6" sm="auto">
              <img className="img-fluid" alt="" src={this.pageContent.about_author.photo} />
            </Col>

            <Col md lg xl="6" sm="auto" className="mt-5 ">
              <h5 className="text-uppercase border-teal" dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.title }}/>
              <br />
              <div dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.link }} />
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
