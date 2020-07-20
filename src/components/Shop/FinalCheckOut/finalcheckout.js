import React, { Component } from "react";
import "./custom.css";
import { Row, Col, ProgressBar } from "react-bootstrap";

class FinalCheckOut extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="p-2 bg-info text-info">1</h1>

        <Row className="">
          <Col className="d-sm-flex justify-content-center p-4">
            <img
              className="img-fluid image"
              alt=""
              src={require("../../HomePage/Img/fwdhhmhomepagedummypics/Home 08.jpg")}
            />

            <div className="p-2">
              <h2 className="text-info">IN TRANSIT</h2>
              <h5>
                Aushmanth's PURE <br />
                (Panacea Ultimate for Rousing Energy
              </h5>
              <p>Seller HHM World Pvt Ltd</p>
              <p>9,499 10,999 13% Off1 offer applied</p>
              <p>Qty:-| 2 |+</p>
              <p>Edit | Remove</p>
            </div>
          </Col>
        </Row>

        <ProgressBar className="m-4" animated now={45} />
      </div>
    );
  }
}

export default FinalCheckOut;
