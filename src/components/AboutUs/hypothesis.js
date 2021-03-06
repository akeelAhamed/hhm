import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class Hypothesis extends BaseComponent {
  constructor(props) {
    super();
  }

  content() {
    return (
      <div id="main">
          
          <div className="ml-3 mr-3">
          <img className="img-fluid" alt="..." src='https://admin.hhmworld.com/assets/images/logo/hyphothis-Banner.jpg'/>

</div>

<Container fluid>
          <Row>
            <Col md={12} className="p-5">
            <h3 className="border-teal1 text-uppercase pl-4">Hypothesis of HHM</h3>
             <img className="img-fluid li" alt="..." src={require('./img/science-01.png')}/>
              <div className="pl-inner">
                <p>
                The applications of holistic human metaphysics are based on the three hypotheses which are
formulated by combining the various founding principles of Energy medicine, Theory of
dissipative adaptation, Theory of everything, Geo-magnetic field, Colour medicine, Vibrational
medicine and Subtle energy systems in human body.

                </p>
                <p><b>First hypothesis of holistic human metaphysics:</b></p>
                <p>
                The first hypothesis of holistic human metaphysics states that the physical system of the
human body is a manifestation of the effect of appropriate reductions in the spectral frequencies
of the seven principal colours of light rays to a localised non-entropic boundaried physical
space.

                </p>

                <p><b>Second hypothesis of holistic human metaphysics:</b></p>
                <p>
                The second hypothesis of holistic human metaphysics states that the first breath of a
human being at the moment of birth determines the magnitude of the entropic force acting on
the pattern of health at various stages of life.

                </p>


                <p><b>Third hypothesis of holistic human metaphysics:</b></p>
                <p>
                Third hypothesis of holistic human metaphysics The predetermined magnitude of the
entropic force acting on the pattern of health at various stages of life is alterable by maintaining
equilibrium of the seven principal colours of light rays.

                </p>

                <p><b>The energy centers of your body:</b></p>
                <p>
                According to Holistic Human Metaphysics, the human body is a resonating crystal vibrating
at different frequencies. It has been proven that the human body is composed of seven principal
light rays condensed to a localised boundary of non-entropic physical space. As human beings,
we receive and radiate light waves (violet, indigo, blue, green, yellow, orange, and red)
possessing frequencies corresponding to visible spectrum in sunlight. Each of these light waves
have certain unique characteristics essential for leading a quality life. These seven principal
colours of light rays in the visible spectrum of sunlight have a unique entry point in the human
body. These entry points are called the energy centers of your body. Dr. Jayakrishnan argues
that if the human body has not been made of colours of light, these unique entry points would
not have been established in the human body.


                </p>
                <p><b>The power of Breath:</b></p>
                <p>
                The breath that we take every time is said to contain almost 700 million electrically charged
particles. They are produced as a result of the striking of planetary cosmic light rays (originated
due to reflection from other planets and also from the sun directly) with earth’s atmosphere. This
collision of rays with earth’s atmosphere produces a geo-electromagnetic field. As the solar
system and the planets in it are not static, the geo-electromagnetic field and the composition of
these electrically charged particles vary overtime. Your whole ability to do anything is solely
determined by the electrically charged particles that you inhale as breath to lead holistic health
care.

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