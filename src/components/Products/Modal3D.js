import React from "react";
import { Modal } from 'react-bootstrap';

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
        <div style={{maxHeight: '600px'}}>
          <button className="btn-link close" style={{position: 'absolute',zIndex: 9,right: '5px',margin: '5px',color: '#FFF'}} onClick={props.onHide}>
            Close
          </button>
          <div style={{left: "0px", width: "100%", height: "0px", position: "relative", paddingBottom: "75%", overflow: "hidden",}}>
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

export default Modal3D;