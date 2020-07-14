import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import './homepage.css';

class HomePage extends Component {
  render() {
    return (
        <div>
            <Container fluid>
                <Row className="no-gutters">
                    <Col className="b text-uppercase text-monospace white">
                        <strong className="float-right p-5">higher living</strong>
                    </Col>
                    <Col >
                    <img className="img-fluid" alt="" src={require("../AboutUs/img/santosh-verma-us6C9t4wz_U-unsplash(1).jpg")}/>
                    </Col>
                </Row>
            </Container>
           

             <div className="d-md-flex flex-row second m-2">
                <div >
                <img className="img-fluid" alt="" src={require("../HomePage/Img/erik-brolin-ZARfCYDaVg0-unsplash.jpg")}/>
              </div>

              <div className="my-5 p-2">
                  <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                  <h5 className="text-uppercase">a scientific way of living</h5>
                  <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
              </div>
            </div> 
            
        


          <div className="">
            <div className="p-5 back-color ">
                  <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                  <h5 className="text-uppercase">a scientific way of living</h5>
                  <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
            </div>
          </div>



          <div className="d-md-inline-flex">

          <div className="my-5">
          <img className="img-fluid" alt="" src={require('../HomePage/Img/amir-khan-4x0imdL55bQ-unsplash.jpg')}/>
          </div>
          <div className="my-4 p-5">
                  <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                  <h5 className="text-uppercase">a scientific way of living</h5>
                  <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                  <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
            </div>
          </div>
          


          <div className="d-md-inline-flex my-4 back-color">

                <div className="d-flex flex-column align-items-center">
                  <img className="img-fluid w-25" alt="" src={require('../HomePage/Img/first.jpg')}/>
                  <img className="img-fluid w-50" alt="" src={require('../HomePage/Img/middle.jpg')}/>
                  <img className="img-fluid w-25" alt="" src={require('../HomePage/Img/third.jpg')}/>
                </div>
                <div className="my-4 p-5">
                        <h4 className="font-weight-bold text-uppercase">Holistic human metaphysics</h4>
                        <h5 className="text-uppercase">a scientific way of living</h5>
                        <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                        <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
                        <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
                  </div>
          </div>

          <div className="bg">
            <div className="d-flex flex-column align-items-end pr-5 py-5">
              <img className="img-fluid" alt="" src={require('../HomePage/Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/david-hofmann-klWtuMJE8Ho-unsplash.jpg')}/>
            </div>
          </div>

          
        </div>
    );
  }
}

export default HomePage;
