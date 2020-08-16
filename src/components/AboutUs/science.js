import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class Science extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div id="main">
        <img className="img-fluid" alt="..." src={require('./img/science-Banner.png')}/>

        <Container fluid>
          <Row>
            <Col md={12} className="p-5">
              <h3 className="text-uppercase border-teal ml-md-5">Science behind HHM</h3>
              <div className="pl-md-5">
                <div className="px-md-3">
                    <img className="img-fluid li" alt="..." src={require('./img/science-01.png')}/>
                    <p>
                      Holistic Human Metaphysics (H.H.M) is envisaged as science of life. It states that happiness is not outside us but within, created by us. HHM focuses on channelizing and aligning planetary energies with human lives, so that their chakras or energy centers are activated, resulting in an enhanced quality of life. Creating a positive aura for a better holistic lifestyle. HHM creates a way of living a better lifestyle which will help you in creating a pure path to a holistic well-being lifestyle. The balance of the chakras of the human body is considered to be the main. The well being of the body and soul is compulsory for the human to attain his or her complete potential. The science behind HHM is Dr. Jayakrishnan the man with a precise mission. 
                    </p>
                      <p>
                        He had done various researches and then yet found out such an elite way of eliminating the negative energy in the body and soul. The main idea behind HHM is to create a well-bound holistic health and lifestyle so that the body is energizing with complete and only positive aura that can help you achieve proper potential in whatever work you obtain. HHM science is helping people for inner peace and greater fulfillment in their lives. This science offers you to experience life with your ultimate potential so that whatever activity is carried out by the individual can be completed with complete perfection and clarity. Practicing P.U.R.E creates a new peak in various dimensions in the person. It brings wholeness and vitality in the mission that is perfected for the various stages. HHM delivers growth and revitalizing the human spirit and eliminates the negative power in nature and brings complete balance in the body and mind, this is what the science is intending to do for the users of the HHM products. The science of eating the right food and the wearing of the right color for the day, those variables are the part of the science that Dr.Jayakrishnan has created so that people can contain all their positive energy and function better to lead to the fulfillment of their pre-set goals. Such changes can be found once the principles are followed perfectly. The essential essence of the Human Holistic Metaphysics can be followed to make you live a life with wellness and health.
                      </p>
                </div>
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