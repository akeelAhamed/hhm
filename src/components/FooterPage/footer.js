import React from "react";
import "./custom.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class FooterPage extends React.Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <Container fluid className="footer text-white">
        <Container>
        <Row>
          <Col md="6" sm="12" className="footer-content-1">

          <img
              src='https://admin.hhm.world/assets/images/1596980432HHM-Logo-White.png'
              width="70"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
           
            <p dangerouslySetInnerHTML={{ __html: this.props.page.heade_footer.footer }}/>
          </Col>
  
          <Col md="3" xs="6">
            <section className="">
              <div className="flex-md-column">
                <h5 className="title border-1">Useful links</h5>
                
                <ul className="text-uppercase font-small">
                  <li className="list-unstyled">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/products">Product</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/benefit">Benefits</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/science">Science</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/hypothesis">Hypothesis</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/terms">Terms & Conditions</Link>
                  </li>
                 
                  <li className="list-unstyled">
                    <Link to="/contact">Contact us</Link>
                  </li>
                 
                </ul>
              </div>
            </section>
          </Col>

          <Col md="3" xs="6">
            <section className="">
              <div className="flex-md-column">
                <h5 className="title">Social media</h5>
                {this.props.page.sociallinks.map((el, index) => (
                    <ul key={index} className="list-unstyled text-uppercase">
                      <li>
                        {" "}
                        <a key={el.id} href={el.facebook} target="_blank" rel="noopener noreferrer">
                          facebook{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.gplus} target="_blank" rel="noopener noreferrer">
                          gplus{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.twitter} target="_blank" rel="noopener noreferrer">
                          twitter{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a key={el.id} href={el.linkedin} target="_blank" rel="noopener noreferrer">
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
      </Container>
    );
  }
};