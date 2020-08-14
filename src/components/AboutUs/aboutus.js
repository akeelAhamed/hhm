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
                <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>
                <small>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. </small>
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