import React from "react";
import { Link } from "react-router-dom";
import BaseComponent from '../../BaseComponent';
import { Spinner } from 'react-bootstrap';

class OrderConfirm extends BaseComponent {
  constructor(props) {
    super();
    this.state.saved = false;
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

  componentDidMount(){
    const cart  = this.getCart();
    const payment_id = this.payment_id;
    cart.price = cart._variant === 12?cart.price:cart.previous_price;
    window._axios.get('/profile?param=true&token='+this.state.user.token)
    .then((result) => {
      const user = result.data;
        if(user !== ''){
          window._axios.post('http://15.206.203.160/api/add_purchase_customer', {
            cust_id:user.id,
            purchaseDate: new Date().getTime(),
            address:user.address+', '+user.city+', '+user.country+', '+user.zip,
            phone:user.reg_number,
            email:user.email,
            productId:cart.id,
            product_name:cart.name+' | '+cart._variant,
            qty:cart._qty,
            amount:cart.price,
            payment_id:payment_id
          })
          .then((result) => {
            this.setState({
              saved: true
            })
            this.emptyCart(false);
          })
        }else{
          this.logOut();
        }
    })
  }

  render() {

    if(!this.state.saved){
      return (
        <div className='center'>
            <Spinner animation="border" variant="info" /><span className="pl-md-2">Confirming your order, don't close or navigate browser...</span>
        </div>
      )
    }

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
