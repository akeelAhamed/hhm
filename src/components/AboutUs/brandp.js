import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class BrandP extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div id="main">
        <div className="ml-3 mr-3">
 
          <img className="img-fluid w-100" alt="banner" src='https://admin.hhmworld.com/assets/images/partner/brandpilos.jpg' />
        </div>

        <Container fluid>
          <Row>
            <Col md={12} className="p-5">
              <h1 className="text-uppercase border-teal">BRAND PHILOSOPHY</h1>
              <div className="pl-3">
                <p>
                HHM helps in realising ultimate happiness while leading your materialistic life. The mindful choices that we make is what determines you- not fate. Human beings are resonating crystals, like everything else in the universe. We give and take energy from our surroundings. If we learn the techniques to channelise these energies and coexist with them, we begin leading a life that is perfect. Everything is made of seven colours that comprises the sunlight, so are we. The planetary energies that influence us on each day of the week are dominated by a specific colour. They will have tremendous effects if we mindfully attract them towards us.  The universe has an inclination towards high entropy ie, chaos. It helps in the creation and destruction cycle. HHM techniques help you to keep your entropy reduced, so that you can evade the universe’s path towards the end, and live longer productively.
                </p>
                <p>
                The HHM philosophy can be summarised in a single sentence:
                         </p>

                <p>
                Thriving  in a low entropy while coexisting with your surrounding energies, is the ultimate way of living.
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