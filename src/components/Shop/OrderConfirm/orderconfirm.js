import React from "react";
import { Link } from "react-router-dom";
import BaseComponent from '../../BaseComponent';

class OrderConfirm extends BaseComponent {
  constructor(props) {
    super();
    this.emptyCart(false);
    const { match: { params } } = props;
    this.payment_id = params.id;

    this.api = false;
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
    return (
      <div className="main">
        <div className="main-content py-5 mt-5 px-2" style={{maxWidth:360, margin: 'auto'}}>
          <img src={require('../img/tick.png')} alt="tick" style={{width:35}} className="img-fluid" /><h1 className="w-100" style={{color: '#7ac043'}}>THANK YOU</h1>
          <p className="b-left border-teal">
            Your order has placed successfully.<br/>Your transaction id is: <b className="bg-grey">{this.payment_id}</b>. <br /> Go to <Link className="text-dark border-bottom" to="/dashboard">Dashboard</Link>
            {this.autoRedirect()}
          </p>
        </div>
      </div>
    );
  }
}

export default OrderConfirm;
