import React from "react";
import "./custom.css";
import { Container, Row, Col } from "react-bootstrap";
import BaseComponent from '../BaseComponent';

export default class FooterPage extends BaseComponent {
  constructor(props){
    super();
  }

  render(){
    console.log(this.props);
    return (
      <Container fluid>
        <Row className="bg-info text-white">
          <Col xl lg md="6" sm="12">
            <img
              src={this.props.page.heade_footer.logo}
              width="70"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
            <p>{this.props.page.heade_footer.footer}</p>
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
                    <a href="#!">R {"&"} D</a>
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
                {this.props.page.sociallinks.map((el, index) => (
                    <ul key={index} className="list-unstyled text-uppercase">
                      <li>
                        {" "}
                        <a key={el.id} href={el.facebook}>
                          facebook{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.gplus}>
                          gplus{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.twitter}>
                          twitter{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.linkedin}>
                          linkedin{" "}
                        </a>{" "}
                      </li>
                    </ul>
                ))}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
};