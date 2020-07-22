import React, { useEffect, useState } from "react";
import "./custom.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

const FooterPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    heade_footer: {
        logo: "1590831847logo-r.png",
        footer: "Aushmath introduces to you the process PURE, viz., Panacea Ultimate for Rousing Energy to realize the complete WELLNESS of one’s mind and body. We adopted certain intelligent dimensions mentioned in Vedic scriptures to materialize the process equipment ‘PURE Pyramid’ (i.e., Inverted Copper Pyramid) employed for the process PURE. Aushmath’s PANACEA ULTIMATE is a perfect blend of natural elements developed for harnessing the best benefits from the widely recognized ‘Smoke Therapy’.",
        footer_logo: "1590831845logo-r.png"
    },
    heade_menu: [
        {
            id: "1",
            title: "About Us",
            slug: "about"
        }
    ],
    footer_menu: [
        {
            id: "2",
            title: "Privacy & Policy",
            slug: "privacy"
        },
        {
            id: "3",
            title: "Terms & Condition",
            slug: "terms"
        }
    ],
    sliders: [
        {
            details_text: "Highlight your personality  and look with these fabulous and exquisite fashion.",
            photo: "1591252521WhatsApp Image 2020-06-02 at 7.19.57 PM.jpeg"
        }
    ],
    feature_products: [
        {
            id: 182,
            name: "Aushmath’s PURE (Panacea Ultimate for Rousing Energy)",
            details: "<p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><font color=\"#000000\"><b>PURE</b></font></p><p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify;\" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><font color=\"#000000\">Aushmath introduces to you the process PURE, viz., Panacea Ultimate for Rousing Energy to realize the complete WELLNESS of one’s mind and body. We adopted certain intelligent dimensions mentioned in Vedic scriptures to materialize the process equipment ‘PURE Pyramid’ (i.e., Inverted Copper Pyramid) employed for the process PURE. Aushmath’s PANACEA ULTIMATE is a perfect blend of natural elements developed for harnessing the best benefits from the widely recognized ‘Smoke Therapy’.</font></p><p style=\"margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: \" open=\"\" sans\",=\"\" arial,=\"\" sans-serif;=\"\" font-size:=\"\" 14px;\"=\"\"><br></p>",
            photo: "1590833457o6hrPCRT.png"
        }
    ],
    videos: [
        {
            id: "6",
            title: "FREE SHIPPING",
            details: "Free Shipping All Order"
        },
        {
            id: "7",
            title: "PAYMENT METHOD",
            details: "Secure Payment"
        },
        {
            id: "8",
            title: "30 DAY RETURNS",
            details: "30-Day Return Policy"
        },
        {
            id: "9",
            title: "HELP CENTER",
            details: "24/7 Support System"
        },
        {
            id: "10",
            title: "Video1",
            details: "https://hhmlife.com/aboutus"
        }
    ],
    blogs: [
        {
            id: 28,
            title: "Smoke Therapy",
            photo: "1590835983pro-3.jpg"
        },
        {
            id: 27,
            title: "Principle “Cosmic Energy Driven Smoke Therapy”",
            photo: "1590835926pro-2.jpg"
        },
        {
            id: 26,
            title: "Concept",
            photo: "1590835840pro-1 (1).jpg"
        }
    ],
    sociallinks: [
        {
            facebook: "https://www.facebook.com/",
            gplus: "https://plus.google.com/",
            twitter: "https://twitter.com/",
            linkedin: "https://www.linkedin.com/"
        }
    ],
    pagesettings: {
        street: "3584 Hickory Heights Drive ,Hanover MD 21076, USA",
        phone: "00 000 000 000",
        fax: "00 000 000 000",
        email: "admin@geniusocean.com"
    }
})

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var proxy = 'https://cors-anywhere.herokuapp.com/'
    axios.get(proxy + 'http://www.hhmlife.org/api/home', {
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'APP_KEY' : 'Test@123'
      }
    })
    .then(res => {
      setData({...res.data})
    })
    .catch(err => {
      console.log(err)
      setData({})
    })
  };

  console.log(data)

  return (
    loading ? <Spinner /> :
    <Container fluid>
      <Row className="bg-info text-white">
        <Col xl lg md="6" sm="12">
          <img
            src={require("../HomePage/Img/logo.png")}
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
          <p>
            {data.heade_footer.footer}
          </p>
        </Col>

        <Col xl lg md="12" sm="12">
          <section className="d-flex justify-content-around flex-lg-row flex-xl-row flex-md-column">
            <div>
              <h5 className="title border-1">Useful links</h5>
              <ul className="text-uppercase font-small">
                <li className="list-unstyled">
                  <a href="#!">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Product</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Gallery</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">R & D</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">track order</a>
                </li>
              </ul>
            </div>

            <div className="flex-md-column">
              <h5 className="title">Social media</h5>
              <ul className="text-uppercase">
                <li className="list-unstyled">
                  <a href="#!">facebook</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">twitter</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">instagram</a>
                </li>
              </ul>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPage;
