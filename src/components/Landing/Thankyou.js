import React from "react"

export default class Thankyou extends React.Component {
  constructor(props) {
    super();
    setTimeout(() => {
        window.location.href = '/promo';
    }, 5000);
  }

  render(){
    return(
      <div className="main center">
        <div className="main-content text-left">
          <img src={require('../Shop/img/tick.png')} alt="tick" style={{width:35}} className="img-fluid" /><h1 className="w-100" style={{color: '#7ac043'}}>THANK YOU</h1>
          <p className="b-left border-teal">
            For downloading E-brocher.<br/> Go to <a className="text-dark border-bottom" href="/">Home</a>
          </p>
        </div>
      </div>
    )
  }

}