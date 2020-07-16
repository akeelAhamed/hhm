import React, {Component} from 'react';
import './custom.css'
import {Row, Col, Container} from 'react-bootstrap';


class AboutUs extends Component{
    render(){
        return(
          <div id="main">
             <div className="bg text-uppercase">
                 <h3 className="bg-text">Higher living</h3>
             </div>

             <Container fluid>
                 <Row>
                     <Col md={6} className="p-3">
                     <h1 className="text-uppercase">About us</h1>
                     <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>
                     <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>
                     </Col>
                     <Col md={6}>
                     <img className="img-fluid"  src={require('../AboutUs/img/woman-handraising.jpg')} alt="" />
                     </Col>
                 </Row>
             </Container>
          </div>
        )
    }
}

export default AboutUs;