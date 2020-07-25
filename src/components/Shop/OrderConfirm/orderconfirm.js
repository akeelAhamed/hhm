import BaseComponent from '../../BaseComponent';
import React from "react";
import "./custom.css";
import { connect } from "react-redux";

class OrderConfirm extends BaseComponent {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="main">
        <div className="main-content">
          <h1>THANK YOU</h1>
          <p className="b-left pl-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incmaididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(OrderConfirm);
