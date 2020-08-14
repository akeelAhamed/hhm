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

        <div className="home-bg-1 ml-3 mr-3" style={{backgroundImage: 'url('+this.pageContent.sliders[0].photo+')'}}>
          <p>{this.pageContent.sliders[0].details_text}</p>
        </div>

        <Container fluid>
          <Row className="no-gutters">
            <Col md="5" >
              <img className="img-fluid w-100" alt="" src={this.pageContent.about_home.photo} />
            </Col>

            <Col md="7" className="p-4">
              <h5 className="border-teal text-uppercase" dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.title }} />
              <small dangerouslySetInnerHTML={{ __html: this.pageContent.about_home.link }} />
            </Col>
          </Row>
        </Container>

        <div className="home-bg-2" style={{backgroundImage: 'url('+this.pageContent.feature_products[0].photo+')'}}>
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal"> {this.pageContent.feature_products[0].name} </h5>
            <br />
            <div dangerouslySetInnerHTML={{ __html: this.pageContent.feature_products[0].details }} /><br />
            <Link className="mt-3 btn btn-primary" to={"/item/"+this.pageContent.feature_products[0].slug}>Buy now</Link>
          </div>
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
