import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class AboutUs extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div id="main">
        <div className="bkg text-uppercase">
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
          
            <Col md={12} className="px-5">
              <h1 className="text-uppercase border-teal">Vision & Mission</h1>
              <div className="pl-3">
                <strong>MISSION</strong>
                <div className="pl-2">
                  <p>HHM, as a relatively new field of metaphysics, is not just another field of science it is apart of the science which is practiced that creates a silver cord between tangible and intangible energy sources of nature. By following the Einsteinian school of reality, HHM explores infinite possibilities of maintaining good health not only at the physical level but through elevating the quality of life by resonating with our surroundings.
                  Human holistic metaphysics process (HHM)  aims include:</p>
                  <ul style={{listStyle: 'none', paddingLeft: '1em'}}>
                    <li>
                      ●	Revealing the role of seven principal light rays composing the human body.
                    </li>
                    <li>
                      ●	Emphasizing the importance of a newborn’s first breath.
                    </li>
                    <li>
                      ●	Balancing the energy flow by maintaining the equilibrium of seven colors of light rays in the human body, for overall health.
                    </li>
                  </ul>
                  <p>The above-stated points are let out by Dr.Jayakrishnan after long research on the topic and he has derived this conclusion so that the people can live with complete formulated life to reach the goals that they intended in the first place.</p>
                </div>
              </div>

              <div className="pl-3">
                <strong>MISSION</strong>
                <p className="pl-2">
                  Dr. Jayakrishnan envisions the scope of applying scientific thoughts, techniques and tools to unravel the underlying link between ancient knowledge and concepts of modern science for the sustainable prosperity of mankind in all areas of life. ART is dedicated to endorse committed and passionate researchers having impeccable skill-set to utilize their expertise to undertake research, training, and education of the masses either of its own or in cooperation aiding in the well being of the people to conduct a healthy holistic life. The practice of HHM can create a special difference in your life as you can see and feel the difference that is taken place within you after following the principles that can gain you more well being and holistic health.
                </p>
              </div>
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