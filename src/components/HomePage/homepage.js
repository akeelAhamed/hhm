import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import './custom.css';

class HomePage extends Component {
  render() {
    return (
        <div>
            
            <div className="bg-image-1 ml-3 mr-3"> 
              <p>Elevate Life</p>
             </div>

            <Container fluid>
                <Row  className="no-gutters">
                  <Col xl md lg="6" sm="auto" >
                      <img  className="img-fluid" alt="" src={require("./Img/med-women.jpg")}/>
                  </Col>
                   
                   <Col xl md lg="6" sm="auto" className="p-3">
                      <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                      <h5 className="text-uppercase">a scientific way of living</h5>
                      <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                   </Col>
                </Row>
            </Container>

            
      
          <div className="">
            <div className="p-5 back-color ">
                  <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                  <h5 className="text-uppercase">a scientific way of living</h5>
                  <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
            </div>
          </div>


          <Container fluid>
            <Row>
              <Col md lg xl="6" sm="auto">
                <img className="img-fluid" alt="" src={require('./Img/business-man.jpg')} />
              </Col>

              <Col md lg xl="6" sm="auto" className="mt-5">
                   <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                    <h5 className="text-uppercase">a scientific way of living</h5>
                    <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                    <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                    <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
              </Col>
            </Row>
          </Container>


          <Container fluid className="back-color">
            <Row>
              <Col xl md lg="6" sm="auto">   
                 <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid w-25" alt="" src={require('../HomePage/Img/first.jpg')}/>
                  <img className="img-fluid w-50" alt="" src={require('../HomePage/Img/middle.jpg')}/>
                  <img className="img-fluid w-25" alt="" src={require('../HomePage/Img/third.jpg')}/>
                </div>
              </Col>

              <Col xl md lg="6" sm="auto" className="mt-5" >
                    <h4 className="font-weight-bold text-uppercase">Success Stories</h4>
                    <h5 className="text-uppercase">a scientific way of living</h5>
                    <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                    <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                    <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
              </Col>
            </Row>
          </Container>

          <div className="bg-image-2">
            <p className="videos"><span>Videos</span></p>
            <div className="d-flex flex-column align-items-end pr-5 py-5">
              <img className="img-fluid" alt="" src={require('../HomePage/Img/dance-woman.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/dance-woman.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/dance-woman.jpg')}/>
            </div>
          </div>



          {/* last section */}
          <p className="videos m-3"><span>Blogs</span></p>

          <div className="d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column m-3">
              <div className="bg-img text-white">
                <h5 className="bg-info">HHM</h5>
                <div className="text bg-black">
                  <p>Is HHM an incredibly complex and dynamic process?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
              </div>

            <div className="d-flex flex-row">
                <div className="second"><img className="img-fluid" src={require('./Img/dance-woman.jpg')} alt=""/></div>
                <div className="third"><img className="img-fluid" src={require('./Img/med-women.jpg')} alt=""/></div>
                <div className="fourth"><img className="img-fluid" src={require('../AboutUs/img/hand.jpg')} alt=""/></div>
            </div>
          </div>


          
        </div>
    );
  }
}

export default HomePage;
