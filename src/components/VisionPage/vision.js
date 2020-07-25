import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css'
import { Col, Row, Container } from 'react-bootstrap';

class Vision extends BaseComponent {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <div className="bg"></div>
                <Container fluid>
                    <Row>
                        <Col sm="auto" md lg xl="6" className="p-5">
                            <h1 className="text-uppercase">Vision</h1>
                            <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>

                        </Col>
                        <Col sm="auto" md lg xl="6">
                            <img className="img-fluid m-1" src={require('./img/lens.jpg')} alt="" />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="auto" md lg xl="6" >
                            <img className="img-fluid m-1" src={require('./img/mission.jpg')} alt="" />
                        </Col>
                        <Col sm="auto" md lg xl="6" className="p-5 ">
                            <h1 className="text-uppercase">Mission</h1>
                            <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>  </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Vision;