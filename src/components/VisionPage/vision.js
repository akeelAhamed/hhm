import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css'
import { Col, Row } from 'react-bootstrap';

class Vision extends BaseComponent {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <Row>
                    <Col sm="auto" md lg xl="6" className="p-5">
                        <h1 className="text-uppercase">Vision</h1>
                        <p className="pl-2">
                            Dr. Jayakrishnan envisions the scope of applying scientific thoughts, techniques and tools to unravel the underlying link between ancient knowledge and concepts of modern science for the sustainable prosperity of mankind in all areas of life. ART is dedicated to endorse committed and passionate researchers having impeccable skill-set to utilize their expertise to undertake research, training, and education of the masses either of its own or in cooperation aiding in the well being of the people to conduct a healthy holistic life. The practice of HHM can create a special difference in your life as you can see and feel the difference that is taken place within you after following the principles that can gain you more well being and holistic health.
                        </p>
                    </Col>
                    <Col sm="auto" md lg xl="6">
                        <img className="img-fluid m-1" src={require('./img/mission.jpg')} alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col sm="auto" md lg xl="6" >
                        <img className="img-fluid m-1" src={require('./img/mission.jpg')} alt="" />
                    </Col>
                    <Col sm="auto" md lg xl="6" className="p-5 ">
                        <h1 className="text-uppercase">Mission</h1>
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
            
                    </Col>
                </Row>
            
            </div>
        )
    }
}

export default Vision;