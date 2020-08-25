import React from "react";
import "./custom.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGooglePlus, FaTwitter, FaLinkedin } from "react-icons/fa";

export default class FooterPage extends React.Component {
  constructor(props){
    super();
    this.social = {
        "facebook": {
          name: 'Facebook',
          icon: <FaFacebook />
        },
        "gplus": {
          name: 'Google +',
          icon: <FaGooglePlus />
        },
        "twitter": {
          name: 'Twitter',
          icon: <FaTwitter />
        },
        "linkedin": {
          name: 'LinkedIn',
          icon: <FaLinkedin />
        }
    }
  }

  render(){
    const date = new Date();
    return (
      <Container fluid className="footer text-white">
        
        <Row>
          <Col lg="5" md="6" className="footer-content-1">
            <div className="d-flex align-items-baseline">
              <img
                src='https://admin.hhmworld.com/assets/images/1596980432HHM-Logo-White.png'
                width="70"
                height="40"
                className="d-inline-block align-top"
                alt="logo"
              />

              <ul className="list-unstyled social">
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
            
            <p dangerouslySetInnerHTML={{ __html: this.props.page.heade_footer.footer }}/>
            <p>&copy; {date.getFullYear()} HHM WORLD. All rights reserved.</p>
          </Col>
  
          <Col lg="7" md="6" className="d-flex align-items-center">
            <section>
              <Nav>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/products">Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/benefit">Benefits</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/science">Science</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/hypothesis">Hypothesis</Nav.Link>
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

        </Row>
        
      </Container>
    );
  }
};