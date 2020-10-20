import BaseComponent from '../BaseComponent';
import React from 'react';
import './custom.css';
import { Row, Col, Container, Accordion, Card, Button } from 'react-bootstrap';


export default class Faq extends BaseComponent {
  constructor(props) {
    super();

    this.faq = [
        {
            title  : "1) Why should I buy PURE?",
            content: "PURE is the final product after a great research in Human Holistics Metaphysics. This science helps you to elevate your life and lead a life in complete wellness and holistic lifestyle. To reach the complete potential of life, the practice of PURE can help you attain your maximum output. It also helps in attaining a Higher Level of Immunity and Protection"
        },
        {
            title  : "2) Who is the promoter of the product?",
            content: "The promoter of the product is Dr.T.P.Jayakrishnan, who has found the answers for all the questions that one has towards fate and life. Dr.T.P.Jayakrishnan is the founder of HHM and his research outcome is PURE. To help people reach their maximum potential in life. "
        },
        {
            title  : "3) Who is the person who has discovered HHM?",
            content: "Dr.T.P.Jayakrishnan is the person who has discovered the science of Human Holistics Metaphysics. HHM is a science developed by Dr T.P. Jayakrishnan, through four decades of research, with a goal to make pure bliss a practical reality. This system of knowledge envisions the scope of applying scientific thoughts, techniques and tools to unravel the underlying link between ancient Indian knowledge and concepts of modern science for the sustainable prosperity of mankind. It explains a novel direction in the field of metaphysics to enable the common man to realise that happiness is not outside us but within created by us."
        },
        {
            title  : "4) Why is PURE expensive?",
            content: "PURE aids many infections and respiratory disease, it has many advantages for the person who practises the art of PURE. He/she can lead their life with a maximum potential of life. The individuals who practise PURE are able to elevate their life. It also helps in attaining a Higher Level of Immunity and Protection. 43 natural ingredients are meticulously handpicked- at special hours when various planetary energies have stronger influence on earth. They are pulverized at specific ratios to form the exotic PURE powder. There are 12 boxes in the package with 30 sachets in each. One sachet can be used for a day."
        },
        {
            title  : "5) What are the specialities of PURE?",
            content: "The PURE lamp is part of the pack, and comes in the shape of an inverted pyramid, called Kalyani. The inverted pyramid traps cosmic energy in it creating a positive aura. The PURE lamp spreads cosmic energy while fuming, and this cleanses us mentally and physically, he elaborates. The inverted pyramid Kalyani in which the PURE powder is burned and then those fumes are inhaled by the person to reach his/ her true potential of life. The 43 ingredients in the PURE product helps to aid many diseases that can be caused. PURE is a form of smoke therapy that makes one feel alive from within. It is based on the belief that cosmic energy strikes the earth from all directions. The process of PURE helps to attract, absorb, and direct cosmic energies and activates the seven major nerve centres - otherwise called Chakras - in the human body."
        },
        {
            title  : "6) Are there any religious quotations for practising PURE?",
            content: "There are absolutely no religious boundaries for practising PURE. They can practise PURE anywhere. "
        },
        {
            title  : "7) What are the benefits of PURE?",
            content: (<>
                <span>Benefits of Panacea Ultimate for Rousing Energy</span>
                <ul className="ml-4" style={{listStyle: 'decimal'}}>
                    <li>PURE acts as an air freshener, the microbial load present in the PURE will purify the air and prevent all infectious diseases caused by potent pathogens.</li>
                    <li>PURE heals Respiratory tract disorders formed in the body. The pathogens that are created once the smoking of the PURE is done it deals with the respiratory diseases associated with tract and lungs.</li>
                    <li>Routine performance of the process PURE helps people to realize the very abstract of "Happiness".</li>
                    <li>The process of PURE nurtures one's learning experience and improves the ability to concentrate on the subject of interest.</li>
                    <li>The daily practice of PURE will without any doubt help an individual to break all addictions. </li>
                    <li>PURE also helps to generate neuro-modulators that can help people to enhance their memory.</li>
                    <li>The energising of the 7 chakras in the body can be done with the daily practice of PURE. </li>
                    <li>PURE attracts the cosmic energy in the universe and adapts it to the body for maintaining vitality and health.</li>
                </ul></>)
        },
        {
            title  : "8) How to perform  PURE in the most beneficial way?",
            content: "PURE can be burned only in the inverted pyramid Kalyani to get the maximum effect. The 43 ingredients which are inside the sachet brings out the complete benefits of the product. Only when it is smoked properly in the proper way only then the true benefit of PURE can be attained."
        },
        {
            title  : "9) Does the smoking of PURE cause the emittance of Carbon?",
            content: "PURE’s ingredients act as an Anti-pollutant, so the smoke which is emitted is harmless. The process of PURE induces Anti-Inflammatory and Antioxidant effects in the performer."
        },
        {
            title  : "10) If carbon is emitted does that affect the lungs when we inhale the smoke?",
            content: "Since the PURE is an Anti-pollutant agent the smoke which is emitted when inhaled does not create any irritation or infection in the lungs."
        },
        {
            title  : "11) If we don’t use the product Kalyani to smoke the PURE sachet does the effect go down?",
            content: "The inverted pyramid Kalyani is designed in such a way that the performer of PURE can attract the universal cosmic energy to the person and then help him/ her reach total wellness and holistic lifestyle. "
        },
        {
            title  : "12) Can we buy just the inverted pyramid lamp alone and not the whole 12-month package?",
            content: "The inverted pyramid which is also known as Kalyani is not available for sale alone. It is only given with the 12 months package."
        },
        {
            title  : "13) How long should the PURE be smoked in order to attain the complete potential of the product?",
            content: "The art of PURE is a process which needs to be followed very precisely. The results are intangible, it can only be felt. The process must be carried out just the way it is indicated only then the complete benefit can be felt."
        },
        {
            title  : "14) Can the PURE sachet be smoked on another surface other than the inverted lamp?",
            content: "The practice of PURE is a process which needs to be followed correctly. The correct and most beneficial way of smoking the PURE is in the inverted lamp also called Kalyani."
        },
        {
            title  : "15) How long should a person inhale the smoke to feel completely revitalized?",
            content: "The process takes some time to reach the complete potential. Once the process is completed then only the performer can feel the true effect. "
        },
        {
            title  : "16) How does the practising of PURE act as an air pollutant?",
            content: "PURE is considered as smoke therapy which acts against the potential pathogens that cause infections and respiratory disease. PURE reduces the microbial load present in the ambient air."
        },
        {
            title  : "17) What is the time period that is claimed so that a person can realize true happiness?",
            content: "Once the process of PURE is followed correctly then only the performer can realize true happiness. Since these are intangible benefits these can only be felt. "
        },
        {
            title  : "18) Happiness, wellness are intangible emotions. How long does one take to feel that emotion?",
            content: "The true potential of PURE is felt only after the process is performed correctly, so the benefit can't be time-bound. It can only be felt since these are intangible benefits. "
        },
        {
            title  : "19) What is the shelf life of PURE?",
            content: "Since the 43 ingredients in PURE are completely ayurvedic, the product's shelf life is not time-bound. It has to be stored in a dry place. (the product has to be used maximum within 3 years)"
        },
        {
            title  : "20) Can we buy the product for 3-6 months or only we can buy the 12-month package? ",
            content: "Once the 12-month pack is purchased, there are refill packs that are provided for 3-months and 6-months without the inverted pyramid (Kalyani). There are no other packages that are available for PURE. "
        },
        {
            title  : "21) Is the PURE sachet available as a sample pack?",
            content: "The PURE sachet is not available as a sample pack. The first purchase has to be the 12-month package. Later on, the refill packs are available for the performer for 3 or 6 month basis."
        },
        {
            title  : "22) Does the practice of PURE eliminate infections and does it act as a pest repellant?",
            content: "PURE is considered as an air purifier, it reduces the microbial load in the ambient air making it easy to inhale. The smoke therapy acts against potential pathogens causing infections and diseases."
        },
        {
            title  : "23) Is it a religious product?",
            content: "The process of PURE is focused mainly on inducing health and wellness. This process is completely not religious, any person performing any spiritual basis can perform PURE. It can be performed anywhere by anyone."
        },
        {
            title  : "24) Is PURE considered as sacred? Can it be used in the household of a non-vegetarian?",
            content: "PURE is a dedicated process that makes the performer feel the concept of wellness. Performance of PURE helps to attract the cosmic energy to energize the seven chakras in the human body, so the product is not considered sacred."
        },
        {
            title  : "25) Is there a preferred gender for the practice of PURE? If yes then can women who are undergoing periods perform this?",
            content: "The PURE process is not gender-biased. Any person male or female, can perform PURE and can attain complete potential of life. Elevate themselves to a greater level of life.    "
        },
        {
            title  : "26) If the smoke of PURE is inhaled can it cause any respiratory diseases?",
            content: "The process of PURE helps to reduce the potential pathogens that cause diseases. PURE induces Anti-inflammatory and Anti-oxidants effects for the performer. The 43 ingredients are completely ayurvedic herbs which do not cause any negative effect in the human body."
        }
    ];
  }

  content() {
    return (
      <div id="main">
        <Container>
          <Row>
            <Col md={10} className="p-5 m-auto">
            <h3 className="border-teal1 text-uppercase pl-4">Frequently Asked Questions</h3>
              <div className="pl-inner">
                <Accordion defaultActiveKey="0">
                {
                    this.faq.map((faq, i) => (
                        <Card key={i}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={i.toString()}>
                                    {faq.title}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={i.toString()}>
                                <Card.Body>
                                    {faq.content}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))
                }
                    
                </Accordion>
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