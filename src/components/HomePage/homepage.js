import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './custom.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import BaseComponent from '../BaseComponent';

export default class HomePage extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div className="main-container">

        <div className="home-bg-1 ml-3 mr-3">
          <p>{this.pageContent.sliders[0].details_text}</p>
        </div>

        <Container fluid>
          <Row className="no-gutters">
            <Col xl md lg="6" sm="auto" >
              <img className="img-fluid" alt="" src={require("./Img/fwdhhmhomepagedummypics/Home 02.jpg")} />
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto p-3">
              <h5 className="border-teal text-uppercase">Holistic human metaphysics <br /> a scientific way of living </h5>
              <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
            </Col>
          </Row>
        </Container>



        <div className="home-bg-2" style={{backgroundImage: 'url('+this.pageContent.feature_products[0].photo+')'}}>
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal"> {this.pageContent.feature_products[0].name} </h5>
            <br />
            <div dangerouslySetInnerHTML={{ __html: this.pageContent.feature_products[0].details }} /><br />
            <Link className="mt-3 btn btn-primary" to="/products">View products</Link>
          </div>
        </div>


        <Container fluid>
          <Row>
            <Col md lg xl="6" sm="auto">
              <img className="img-fluid" alt="" src={this.pageContent.about_author.photo} />
            </Col>

            <Col md lg xl="6" sm="auto" className="mt-5 ">
              <h5 className="text-uppercase border-teal">{this.pageContent.about_author.link}</h5>

              <div dangerouslySetInnerHTML={{ __html: this.pageContent.about_author.link }} />
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-gray">
          <Row>
            <Col xl md lg="6" sm="auto" className="m-auto">
              <div className="d-flex flex-column align-items-center">

                <img className="img-fluid align-self-start m-1" alt="girl" src={require('./Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
                <img className="img-fluid align-self-end m-1" alt="boy" src={require('./Img/fwdhhmhomepagedummypics/Home 06.jpg')} />
                <img className="img-fluid align-self-start m-1" alt="girl" src={require('./Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
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
            {
              this.pageContent.videos.map(el => 
                <ReactPlayer className="m-3" controls width="30%" height="30%" key={el.id} url={el.details} />
              )
            }
          </div>
        </div>


        <h5 className="m-3"><span className="border-teal"> Blogs </span></h5>

        <Container fluid>
          <Row className="no-gutters">
            {
              this.pageContent.blogs.map(blog => (
              <Col md="4" key={blog.id} data-img={encodeURI(blog.photo)} style={{backgroundImage: 'url('+blog.photo+')'}} className="bg-yoga">
                <div className="d-block p-2">
                  <h5>{blog.title}</h5>
                </div>
              </Col>
              ))
            }
          </Row>
        </Container>

      </div >
    );
  }

  render(){
    return !this.state.pageLoaded?this.prePage():this.content();
  }
}
