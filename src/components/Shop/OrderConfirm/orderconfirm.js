import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

class OrderConfirm extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="main">
        <div className="main-content py-5 mt-5" style={{maxWidth:360, margin: 'auto'}}>
          <img src={require('../img/tick.png')} alt="tick" style={{width:55}} className="img-fluid" /><h1 className="w-100" style={{color: '#7ac043'}}>THANK YOU</h1>
          <p className="b-left border-teal">
            Your order has placed successfully.<br/>Your transaction id is: <b className="bg-grey">{this.props.payment_id}</b>. <br /> Go to <Link className="text-dark" to="/dashboard">Dashboard</Link>
          </p>
          
          <div style={{display: 'flex', alignContent: 'center'}}>
          {
            (this.props.complete)
            ?'Order confirmend..'
            :<><Spinner animation="border" variant="dark" /><span className="pl-2">Validating order...</span></>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default OrderConfirm;
