import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';

const FooterPage = () => {
  return (
    <MDBFooter   className="font-small text-white pt-4 mt-4 b color" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="" md="4">
          <img
                    src={require("../HomePage/Img/logo.png")}
                    width="70"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </MDBCol>
          <MDBCol className="text-center" md="4">
            <h5 className="title ">Useful links</h5>
            <ul className="text-uppercase font-small">
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Product</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">R & D</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">track order</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol className=" text-center" md="4">
            <h5 className="title">Social media</h5>
            <ul className="text-uppercase">
              <li className="list-unstyled">
                <a href="#!">facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">instagram</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;