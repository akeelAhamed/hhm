import React from "react";
import "./custom.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default class FooterPage extends React.Component {
  constructor(props){
    super();
    this.social = {
        "facebook": {
          name: 'Facebook',
          icon: <FaFacebook />
        },
        "gplus": {
          name: 'Instagram',
          icon: <FaInstagram />
        },
        "twitter": {
          name: 'Twitter',
          icon: <FaTwitter />
        },
        "linkedin": {
          name: 'Youtube',
          icon: <FaYoutube />
        }
    }
  }

  render(){
    const date = new Date();
    return (
      <Container fluid className="footer text-white">
        
        <Row>
          <Col lg="5" md="6" className="footer-content-1">
            <div className="d-md-flex align-items-center">
              <img
                src='https://admin.hhmworld.com/assets/images/15983473231596980432HHM-Logo-White.png'
                width="70"
                height="40"
                className="d-inline-block align-top"
                alt="logo"
              />

              <ul className="list-unstyled social float-right">
                {
                  this.props.page.sociallinks.map((links, index) => {
                    let social = [];
                    for (const key in links) {
                      social.push(
                        <li key={key}>
                          <a href={links[key]} target="_blank" rel="noopener noreferrer">
                            {this.social[key].icon}
                          </a>
                        </li>
                      ) 
                    }
                    return social;
                  })
                }
              </ul>
            </div>
            
            {/* <p dangerouslySetInnerHTML={{ __html: this.props.page.heade_footer.footer }}/> */}
            <p className="pscoical d-none d-md-block"> &copy; {date.getFullYear()} HHM WORLD. All rights reserved.</p>
          </Col>
  
          <Col lg="7" md="6" className="align-items-center mt-sm-3 mt-md-0">
            <section>
              <b className="text-white d-block d-md-none">Usefull link</b>
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/science">Science</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to="/brandphilsophy">Brand philosophy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/hypothesis">Hypothesis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/products">Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/terms">Terms & Conditions</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                </Nav.Item>
              </Nav>
            </section>
          </Col>

          <Col sm="12" className="d-block">
            <hr className="d-block d-md-none"/>
            <p className="d-block d-md-none text-center"> &copy; {date.getFullYear()} HHM WORLD. All rights reserved.</p>
          </Col>
        </Row>
        
      </Container>
    );
  }
};