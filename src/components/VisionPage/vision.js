import React,{Component} from 'react';
import './custom.css'
import {Col, Row, Container} from 'react-bootstrap';

class Vision extends Component{
    render(){
        return(
            <Container fluid>
            <Row>
                <Col sm="auto" md="6" lg="6" xl="6" className="p-5">
                <h1 className="text-uppercase">About us</h1>
                <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>
                
                </Col>
                <Col sm="auto" md="6" lg="6" xl="6">
                <img className="img-fluid"  src={require('../AboutUs/img/william-farlow-IevaZPwq0mw-unsplash.jpg')} alt="" />
                </Col>
            </Row>
        </Container>
        )}
}

export default Vision;