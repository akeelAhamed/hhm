import BaseComponent from '../BaseComponent';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import './custom.css';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';

export default class HomePage extends BaseComponent {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className="main-container">

        <div className="home-bg-1 ml-3 mr-3">
          <p>{this.props.page.sliders[0].details_text}</p>
        </div>

        <Container fluid>
          <Row className="no-gutters">
            <Col xl md lg="6" sm="auto" >
              <img className="img-fluid" alt="" src={require("./Img/fwdhhmhomepagedummypics/Home 02.jpg")} />
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto p-3">
              <h5 className="border-teal text-uppercase">Holistic human metaphysics <br /> a scientific way of living </h5>
              <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
            </Col>
          </Row>
        </Container>



        <div className="home-bg-2">
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal"> {this.props.page.feature_products[0].name} </h5>
            <br />
            <div dangerouslySetInnerHTML={{ __html: this.props.page.feature_products[0].details }} /><br />
            <Button className="mt-3" variant="primary"> Buy Now </Button>
          </div>
        </div>


        <Container fluid>
          <Row>
            <Col md lg xl="6" sm="auto">
              <img className="img-fluid" alt="" src={require('./Img/fwdhhmhomepagedummypics/Home 04.jpg')} />
            </Col>

            <Col md lg xl="6" sm="auto" className="mt-5 ">
              <h5 className="text-uppercase border-teal">Dr.T.P Jayakrishnan <br /> Re energising your life</h5>
              <blockquote><cite> "Illuminating occult to make it obvious" </cite>
                <footer> Dr.T.P. Jayakrishnan </footer> </blockquote>

              <small>Dr.T.P Jayakrishnan, the founder of Holistic Metaphysics beleives that to live fruitfully, recognizing the deep bond between us and the universal energy around us is essential. He strives to understand truths that have not unveiled itself to us yet and makes wy for science to tread on. His unquenched curiosity to find the path towards meaningful existence led to the birth of a new way of living. HHM. "Illuminating the occult to make it obvious" is his idea of combining ancient and modern science</small> <br />
              <small>Dr.T.P Jayakrishnan is based in Chalavara, Kerala.He is the chairman of Aushmat Research Trush (ART) which works on spreading awareness on HHm Aushmath Biconsciences, as laboratory under ART, is dedicated to conduct scientific experience in the field of HHM and conservation of natural resources. The visionary that he is, Dr.Jayakrishnan ahs opened a new door of science, rooted in ancient scriplures of India which once was the most reliable healthcare source of the world </small>
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-gray">
          <Row>
            <Col xl md lg="6" sm="auto" className="m-auto">
              <div className="d-flex flex-column align-items-center">

                <img className="img-fluid align-self-start m-1" alt="girl" src={require('./Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
                <img className="img-fluid align-self-end m-1" alt="boy" src={require('./Img/fwdhhmhomepagedummypics/Home 06.jpg')} />
                <img className="img-fluid align-self-start m-1" alt="girl" src={require('./Img/fwdhhmhomepagedummypics/Home 05.jpg')} />
              </div>
            </Col>

            <Col xl md lg="6" sm="auto" className="my-auto" >
              <h5 className="border-teal text-uppercase">Success Stories <br /> a scientific way of living </h5>
              <small>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
              <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</small>
              <small>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata</small>
            </Col>
          </Row>
        </Container>


        <div className="home-bg-3">
          <h3 className="text-center"><span className="border-teal"> Videos </span></h3>
          <div className="d-flex flex-column align-items-end player">
            {this.props.page.videos.map(el => <ReactPlayer className="m-3" controls width="30vw" height="25vh" key={el.id} url={el.details} />)}
            {/* <ReactPlayer width="30vw" url="https://youtu.be/Jfyjx2rOQWk" controls /> {/*{this.props.page.videos[0].details} */}
            {/* <ReactPlayer width="30vw" url="https://youtu.be/Jfyjx2rOQWk" controls /> */}
            {/* <ReactPlayer width="30vw" url="https://youtu.be/Jfyjx2rOQWk" controls /> */}
            {/* <img className="img-fluid" alt="" src={require('./Img/fwdhhmhomepagedummypics/Home 08.jpg')}/> */}
            {/* <img className="img-fluid" alt="" src={require('./Img/fwdhhmhomepagedummypics/Home 08.jpg')}/> */}
          </div>
        </div>


        <h5 className="text-center m-3"><span className="border-teal">  Blogs </span></h5>

        <Container fluid>
          <Row className="no-gutters">
            <Col xl lg md="6" sm="12" className="bg-yoga">
              <div className="d-flex flex-column">
                <div className="bg-info"><h5>HHM</h5></div>
                <div className="p-2 align-self-end"><p>Is HHM an incredibly complex and dynamic process? <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p></div>
              </div>
            </Col>
            <Col xl lg md="6" sm="12" >
              <img className="img-fluid" alt="" src={require('./Img/fwdhhmhomepagedummypics/Home 10.jpg')} />
            </Col>
          </Row>
        </Container>

      </div >
    );
  }
}
