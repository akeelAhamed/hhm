import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';
import VisionPage from '../VisionPage/vision';

export default class AboutUs extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div id="main">
        <div className="bkgcontact text-uppercase">
          <h3 className="bkg-text">Higher living</h3>
        </div>

        <Container fluid>
          <Row>
            <Col md={12} className="p-5">
              <h1 className="text-uppercase border-teal">About us</h1>
              <div className="pl-3">
                <p>
                  HHM leads you to ultimate  happiness and wellness, by utilizing the planetary energies for betterment of our lives. The importance of intangible forces around us that affect our life is seldom focused upon. T.P. Jayakrishnan, the brain behind HHM, wishes to harness the attraction of the scientific community towards the evidence that holds these hypotheses and investigate further on them.
                </p>
                <p>
                  Holistic Human Metaphysics opens the door to infinite possibilities that could very well lead to the dawn of a new era in the field of healthcare. The HHM profound methods of HHM has helped it's followers in leading a fruitful and successful life. 
                  Holistic Human Metaphysics guides you towards a different perspective of life, where you attain a simpler, better wellness lifestyle. Even though our physical body is important, the effect of intangible energy around us is no lesser. Holistic Human Metaphysics aids in the flow of positive energy throughout the body and mind to lead a holistic lifestyle and well being.
                </p>

                <p>
                  HHM follows the science which is quite differently followed by the medical field today follows the Newtonian model, which gives importance to tangible things. Even though our physical body is important, the effect of intangible energy around us is no lesser. The Einsteinian model gives more prominence to things beyond our senses, like the cosmic rays of the sun and the geomagnetic field of earth. H.H.M follows the Einstein model, and helps you utilize these powerful energies around you to achieve your greatest dreams. 
                </p>
              </div>
            </Col>
          
            <Col md={12} className="px-md-5">
              <VisionPage />
            </Col>
          
          </Row>
        </Container>
      </div>
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}