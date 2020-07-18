import React, { Component } from "react";
import "./custom.css";
import {Button} from 'react-bootstrap';

class ProductPage extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="home_bg-1 text-uppercase">
          <h3>Higher living</h3>
        </div>

        <div className="home_bg-2">
          <div className="home_bg-2-text">
            <h5 className="text-uppercase border-teal">
              Aushmat pure <br /> Re energising your life
            </h5>
            <br />
            <small>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
            <br />
            <br />
            <small>
              uis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,
            </small>
            <br />
            <br />
            <small>
              uis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidata
            </small>
          </div>
        </div>

        <div className="home_bg-2"> </div>

        <div className="home_bg-3 bg-secondary my-auto">
            <div className="home_bg-3-text my-auto">
                <h3 className="text-capitalize">pana ultimte for rousing energy</h3> <br/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incmaididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.</p>
            <Button className="" variant="info">Buy Now</Button>
            </div>    
         </div>

         <div className="home_bg-4">
         <h3 className="text-center"><span className="border-teal"> Videos </span></h3>
            <div className="d-flex flex-column align-items-end ">
              <img className="img-fluid" alt="" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg')}/>
              <img className="img-fluid" alt="" src={require('../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg')}/>
            </div>
         </div>

      </div>
    );
  }
}

export default ProductPage;
