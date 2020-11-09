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

        <Col lg="3" md="3" className="col-md-3">
            <div className="d-md-flex align-items-center">
              <img
                src='https://admin.hhmworld.com/assets/images/logo/hhmpuresvg.svg'
                width="125px"
                height="75px"
                className="d-inlinefoo align-top"
                alt="logo"
              />

             
            </div>
            <ul className="list-unstyled socialview">
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
            {/* <p dangerouslySetInnerHTML={{ __html: this.props.page.heade_footer.footer }}/> */}
            <p className="pscoicalv d-none d-md-block"> &copy; {date.getFullYear()} HHM WORLD. All rights reserved.</p>
          </Col>
         

          <Col lg="3" md="3" className="col-md-4">
          <h2 className="pscoicaldatho">Hours of  <br/> operation</h2>
            <p > Mon-Fri: 9AM to 6PM</p>
            <p > Sat-Sun: Closed</p>
          </Col>

          <Col lg="3" md="3" className="col-md-4">
          <h2 className="pscoicaldatho"><br/>contact us</h2>
            <p >Mail: support@hhmworld.com</p>
            <p >Tel: +91 808 6511 100</p>
          </Col>

          <Col lg="3" md="3" className="col-md-4">
          <h2 className="pscoicaldatho"><br/><br/> </h2>
          <button type="button" class="btn btn-primary rounded btn btn-primary" href="http://store.hhmworld.com/item/hhm-pure-panacea-ultimate-for-rousing-energy-hhm00100">Buy now</button>
          </Col>
        </Row>
        
      </Container>
    );
  }
};