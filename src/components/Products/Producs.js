import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import has from "lodash/has";
import map from "lodash/map";
import includes from "lodash/includes";
import BaseComponent from '../BaseComponent';
import Gallery from "../ProductPage/Gallery";
import "./custom.css";

export default class Products extends BaseComponent {
  constructor(props) {
    super();
    this.state.current = '';
    this.state._3d = [
      {
        img : require('./img/Product-Page-03a-Pure.png'),
        file: '02',
      },
      {
        img : require('./img/Product-Page-03b-Lamp-02.png'),
        file: '02'
      },
    
    ];
    this.imageType = ['back_ground', 'product', 'another', 'top','followup'];
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

<div className="ml-3 mr-3">
          <p className="b-absolute">HIGHER LIVING</p>
          <img className="img-fluid w-100" alt="banner" src={this.getImage(product.allimages, 'top')} />
        </div>
        
        <div className="home-bg-prod" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'back_ground')+')'}}>
          <div className="home-bg-2_text">
            <h5 className="text-uppercase border-teal" dangerouslySetInnerHTML={{ __html: product.name }} />
            <br />
            <small dangerouslySetInnerHTML={{ __html: 'Inspired from ancient traditions developed by great scholars of the past, H.H.M brings you Panacea Ultimate for Rousing Energy (P.U.R.E), a smoke therapy that will make you feel alive from within. Cosmic energy strikes the earth from all directions. The process of P.U.R.E helps to attract, absorb, and direct cosmic energy to travel towards the brain and energize the seven chakras in the body. P.U.R.E package contains the PANACEA ULTIMATE powder which is a mixture of 43 different herbs with tremendous health benefits. This smoke therapy has created many people to live their life with utmost potential and the well being of a holistic lifestyle. The theories that are set out to a benefit that humans could gain are set out by HHM so that people can live the complete while they achieve a perfect goal-oriented life to make a difference in the nature and in the lifestyle.  It can be smoked at any time in your living room/any part of your house regardless of religion anyone can use the P.U.R.E to elevate their life.'}} /><br />
            <img
            src='https://admin.hhmworld.com/assets/images/sliders/purelogo.png'
            width="100"
            height="68"
            className="btn-primaryhomedata n ml-3 "
            alt="logo"
          />
            <Link className="mt-3 btn btn-primaryhomenew" to={"/item/"+product.slug}>Buy now</Link>
          </div>
        </div>


        <div className="pproduct">
          <img src={this.getImage(product.allimages, 'followup')} className="img-fluid w-100" alt="..." />
        </div>

        <div className="home-bg-1" style={{backgroundImage: 'url('+this.getImage(product.allimages, 'another')+')'}}>
          <Container>
            <Row className="_3d">
              <Col md="5">
                <Gallery img={this.state._3d[0].img} gallery={map(this.state._3d, 'img')} _3d={this.state._3d}/>
              </Col>
              
              <Col md="7">
                <div className="home-bg-2_text">
                  <div dangerouslySetInnerHTML={{ __html:'<b>BENEFITS OF P.U.R.E SMOKE THERAPY</b><br/>Breaks addictions<br/>Energizes the chakras<br/>Improves focus<br/>Enhances memory<br/>Purifies air<br/>Heals respiratory disorders<br/>Eliminates free radicals<br/>Has anti-inflammatory and antioxidant effects<br/>Absorbs cosmic energy' }} /><br />
                
                
                  <Link className="mt-3 btn btn-primary" to={"/item/"+product.slug}>Buy now</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="home-bg-1" style={{backgroundImage: 'url(https://admin.hhmworld.com/assets/images/sliders/productpagebeifits.jpg)'}}>
        <Container fluid>
          <Row>
            <Col md={12} className="p-5">
              <h1 className="text-uppercase border-teal">BENEFITS OF HHM</h1>
              <div className="pl-3">
                <p>
                 Once the pattern of HHM is followed accurately, You can attain holistic wellness that can lead your life to a new direction. H.H.M, P.U.R.E- Breaks addictions, Energizes the chakras, Improves focus, Enhances memory, Purifies air, Heals respiratory disorders, Eliminates free radicals, Has anti-inflammatory and antioxidant effects, Absorbs cosmic energy. The boundless energy around us, if channeled properly, makes one feel energised for leading a productive life. Inspired from ancient traditions developed by the great scholars of the past, H.H.M brings you Panacea Ultimate for Rousing Energy (P.U.R.E), a smoke therapy which will make you feel alive from within. Cosmic energy strikes the earth from all directions. The process of P.U.R.E helps to attract, absorb and direct cosmic energy to travel towards the brain and activate the seven energy centres in the body. P.U.R.E helps you realise the ultimate wellness, physical, mental. PURE smoke in your house or work place fills it with positive energy, making it a more welcoming, happier space. Inhaling the medicinal fumes leaves you fresh, calm, and revived. The HHM principles can be followed in the day to day lifestyle so that you can revitalize the positive aura surrounding you to generate the Law of Coexistence. Once these factors are maintained properly the seven chakras in the body will be activated and you can attain a healthy holistic lifestyle which can change your lifestyle. These principles can assist you in holistic nutritions and also help in reverse ageing also. P.U.R.E is a natural medicine that can treat all the negative aura which is surrounding you. It benefits you in your day to day activities to gain or improve your concentration in what work one may pursue. The chakras in the body are the energy points in the human body. Those points need to be activated perfectly to attain the complete potential of the individual and unlock many levels in the human body. Adapting these HHM principles such as eating the right food and activating the right star sign can maintain a perfect balance in nature and help you achieve a greater holistic level of life. HHM helps to receive and emits cosmic energy to cleanse us physically, mentally and spiritually which gains more focus and multiplying positive aura around you whenever carrying out any work. The practice of HHM ensures a complete meaning of life and rising above negative entropy that can delude you from all the work that is going to be completed so that can manage the true potential of the human body. A concept of higher living which turning out to be a reality is initiated by the HHM so that the user can differentiate the normal ways of living and Human Holistic Metaphysics way of living to break all the barriers one might face while working on any project.all the mental barrier that a person might face can be eliminated with the usage of HHM principles. It’s not just the mental barriers that can delude the complete potential but also many other issues such as respiratory disorders and any other forms of addiction can be cured by the usage of HHM science. HHM delivers you the Ultimate potential of life one can attain.
                </p>
               
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