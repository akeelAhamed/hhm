import React from "react";
import { Link } from 'react-router-dom';
import { Modal, Row, Col, Container } from 'react-bootstrap';
import has from "lodash/has";
import map from "lodash/map";
import includes from "lodash/includes";
import BaseComponent from '../BaseComponent';
import Gallery from "../ProductPage/Gallery";
import "./custom.css";

function Modal3D(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="3d-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body className="p-0">
        <div style={{maxWidth: '800px', maxHeight: '800px'}}>
          <button className="btn-link close" style={{position: 'absolute',zIndex: 9,right: '5px',margin: '5px',color: '#FFF'}} onClick={props.onHide}>
            Close
          </button>
          <div style={{left: "0px", width: "100%", height: "0px", position: "relative", paddingBottom: "100%", overflow: "hidden",}}>
              <iframe src="./3d/02/index.html"
                  title="3d product"
                  style={{ position: "absolute", top: "0px", left: "0px", height: "100%", minWidth: "100%", width: "100%", }}
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no">
              </iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default class Products extends BaseComponent {
  constructor(props) {
    super();
    this.state.modal = false;
    this.state.current = '';
    this.state._3d = [
      {
        img : require('./img/Product-Page-03a-Pure.png'),
        file: '02',
      },
      {
        img : require('./img/Product-Page-03b-Lamp.png'),
        file: '02'
      },
      {
        img : require('./img/Product-Page-03c-Sachets.png'),
        file: '02'
      },
      {
        img : require('./img/Product-Page-03d-Spatula.png'),
        file: '02'
      },
    ];
    this.imageType = ['back_ground', 'product', 'another', 'top'];
  }

  /**
   * Get background imagee
   * 
   * @param object images 
   */
  getImage(images, type){
    let image = images[0].photo;
    for (let i = 0; i < images.length; i++) {
      if(has(images[i], 'image_type') && (includes(this.imageType, images[i].image_type.toLowerCase()))){
        if(images[i].image_type.toLowerCase() === type){
          image = images[i].photo;
          break;
        }
      }
    }

    return image;
  }

  productDetail(product){
    return (
      <div className="main-container">

        <div className="text-uppercase ptop">
          <h3>Higher Living</h3>
          <img src={this.getImage(product.allimages, 'top')} className="img-fluid" alt="..." />
        </div>

        <div className="home-bg-2" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'back_ground')+')'}}>
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal"> {product.name} </h5>
            <br />
            <div dangerouslySetInnerHTML={{ __html: product.details }} /><br />
            <Link className="mt-3 btn btn-primary" to={"/item/"+product.slug}>Buy now</Link>
          </div>
        </div>

        <div className="pproduct">
          <img src={this.getImage(product.allimages, 'product')} className="img-fluid w-100" alt="..." />
        </div>

        <div className="home-bg-1-" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'another')+')'}}>
          <Container>
            <Row className="_3d">
              <Col md="5">
              <img src={require('./img/3D-button.png')} alt="3d" title="3D VIEW" className="img-fluid _3d-button" onClick={() => this.setState({modal: true})}/>

              <Gallery img={this.state._3d[0].img} gallery={map(this.state._3d, 'img')} _3d={this.state._3d}/>

              <Modal3D
                show={this.state.modal}
                onHide={() => this.setState({modal: false})}
                current={this.state.current}
              />
              </Col>
              
              <Col md="7">
                <div className="home-bg-2_text">
                  <div dangerouslySetInnerHTML={{ __html: product.details }} /><br />
                  <Link className="mt-3 btn btn-primary" to={"/item/"+product.slug}>Buy now</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        
      </div>
    );
  }

  content() {
    //
    return(
      <>
        {
          this.pageContent.prods.data.map((product, key) =>
            (<div key={key}>
              {this.productDetail(product)}
            </div>)
          )
        }
      </>
    )
  }

  render(){
    return (!this.state.pageLoaded)?this.prePage():this.content();
  }
}