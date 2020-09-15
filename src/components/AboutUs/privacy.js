import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container } from 'react-bootstrap';


export default class Privacy extends BaseComponent {
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
              <h3 className="border-teal text-uppercase pl-4">Privacy and Policy</h3>
              <div className="pl-md-5">
                <p className="px-md-3">
                    <img className="img-fluid li" alt="..." src={require('./img/science-01.png')}/>
                    Thank you for visiting our website. This privacy policy tells you how we use personal information collected at this site. Please read this privacy policy before using the site or submitting any personal information. By using the site, you are accepting the practices described in this privacy policy.<br/>
                  
                    <br/>
                    Cookie/Tracking Technology : The Site may use cookie and tracking technology depending on the features offered, Cookie is  a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past).
                    <br/>
                    Sharing  of Information : We may share the information we have collected from you with governmental agencies assisting us in fraud prevention or investigation. We may do so when: 
                    <br/>
                    (1) Permitted or required by law; or,
                    <br/>
                    (2) Prevent or protect from  fraud or unauthorized transactions; or,
                    <br/>
                    (3) Investigating fraud or unauthorized transactions, 
                    <br/>
                    Data Security : Your personal information that we capture is  kept secure. Only authorized employees (who have agreed to keep information secure and confidential) have access to this information.
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