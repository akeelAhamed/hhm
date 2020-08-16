import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

class OrderConfirm extends React.Component {
  constructor(props) {
    super();
  }

  /**
   * Automatically redirect
   */
  autoRedirect(){
    setTimeout(() => {
      //window.location.href = '/dashboard';
    }, 3000);
  }

  render() {
    if(!this.props.complete){
      return (
        <div className='center'>
          <Spinner animation="border" variant="info" /><span className="pl-md-2">Validating order, don't close or navigate browser...</span>
        </div>
      )
    }

    return (
      <div className="main">
        <div className="main-content py-5 mt-5 px-2" style={{maxWidth:360, margin: 'auto'}}>
          <img src={require('../img/tick.png')} alt="tick" style={{width:35}} className="img-fluid" /><h1 className="w-100" style={{color: '#7ac043'}}>THANK YOU</h1>
          <p className="b-left border-teal">
            Your order has placed successfully.<br/>Your transaction id is: <b className="bg-grey">{this.props.payment_id}</b>. <br /> Go to <Link className="text-dark border-bottom" to="/dashboard">Dashboard</Link>
            {this.autoRedirect()}
          </p>
        </div>
      </div>
    );
  }
}

export default OrderConfirm;
