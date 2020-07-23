import React from "react";
import "./custom.css";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import { connect } from "react-redux";

const FooterPage = props => {
  // console.log(props.data.footer)

  return (
    // loading ? <Spinner /> :
    <Container fluid>
      <Row className="bg-info text-white">
        <Col xl lg md="6" sm="12">
          <img
            src={require("../HomePage/Img/logo.png" )}
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
          <p>
            {props.data.heade_footer.footer}
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
                  <a href="#!">R {'&'} D</a>
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

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(FooterPage);
