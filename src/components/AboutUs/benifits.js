import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class Benifits extends BaseComponent {
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
              <h3 className="text-uppercase border-teal ml-md-5">Benifits of HHM</h3>
              <div className="pl-md-5">
                <div className="px-md-3">
                    <img className="img-fluid li" alt="..." src={require('./img/science-01.png')}/>
                    <p>
                      Once the pattern of HHM is followed accurately, You can attain holistic wellness that can lead your life to a new direction.  H.H.M,  P.U.R.E- Breaks addictions, Energizes the chakras, Improves focus, Enhances memory, Purifies air, Heals respiratory disorders, Eliminates free radicals, Has anti-inflammatory and antioxidant effects, Absorbs cosmic energy. 
                      
                      The boundless energy around us, if channeled properly, makes one feel energised for leading a productive life.  Inspired from ancient traditions developed by the great scholars of the past, H.H.M brings you Panacea Ultimate for Rousing Energy (P.U.R.E), a smoke therapy which will make you feel alive from within. Cosmic energy strikes the earth from all directions. The process of P.U.R.E helps to attract, absorb and direct cosmic energy to travel towards the brain and activate the seven energy centres in the body.
                      P.U.R.E helps you realise the ultimate wellness, physical, mental. PURE smoke in your house or work place fills it with positive energy, making it a more welcoming, happier space. Inhaling the medicinal fumes leaves you fresh, calm, and revived. 

                      The HHM principles can be followed in the day to day lifestyle so that you can revitalize the positive aura surrounding you to generate the Law of Coexistence. Once these factors are maintained properly the seven chakras in the body will be activated and you can attain a healthy holistic lifestyle which can change your lifestyle. These principles can assist you in holistic nutritions and also help in reverse ageing also. P.U.R.E is a natural medicine that can treat all the negative aura which is surrounding you. It benefits you in your day to day activities to gain or improve your concentration in what work one may pursue. The chakras in the body are the energy points in the human body. Those points need to be activated perfectly to attain the complete potential of the individual and unlock many levels in the human body. Adapting these HHM principles such as eating the right food and activating the right star sign can maintain a perfect balance in nature and help you achieve a greater holistic level of life. HHM helps to receive and emits cosmic energy to cleanse us physically, mentally and spiritually which gains more focus and multiplying positive aura around you whenever carrying out any work. The practice of HHM ensures a complete meaning of life and rising above negative entropy that can delude you from all the work that is going to be completed so that can manage the true potential of the human body. A concept of higher living which turning out to be a reality is initiated by the HHM so that the user can differentiate the normal ways of living and Human Holistic Metaphysics way of living to break all the barriers one might face while working on any project.all the mental barrier that a person might face can be eliminated with the usage of HHM principles. It’s not just the mental barriers that can delude the complete potential but also many other issues such as respiratory disorders and any other forms of addiction can be cured by the usage of HHM science. HHM delivers you the Ultimate potential of life one can attain.

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