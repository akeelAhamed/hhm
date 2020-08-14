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
              <h3 className="text-uppercase border-teal ml-5">Science behind HHM</h3>
              <div className="pl-5">
                <p className="px-5">
                    <img className="img-fluid li" alt="..." src={require('./img/science-01.png')}/>
                    A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                    <br/>
                    A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                    <br/>
                    A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
                    <br/>
                    A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
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