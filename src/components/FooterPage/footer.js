import React, { useEffect, useState } from "react";
import "./custom.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const FooterPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var proxy = 'https://cors-anywhere.herokuapp.com/'
    axios.get(proxy + 'http://www.hhmlife.org/api/home', {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : 'Bearer Test@123'
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <Container fluid>
      <Row className="bg-info text-white">
        <Col xl lg md="6" sm="12">
          <img
            src={require("../HomePage/Img/logo.png")}
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incmaididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </Col>

        <Col xl lg md="12" sm="12">
          <section className="d-flex justify-content-around flex-lg-row flex-xl-row flex-md-column">
            <div>
              <h5 className="title border-1">Useful links</h5>
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
            </div>

            <div className="flex-md-column">
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
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPage;
