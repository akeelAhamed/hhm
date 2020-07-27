import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

/**
 * Base component for this application & to be extented to all component
 */
export default class BaseComponent extends React.Component {

  constructor(props) {
    super();
    this.state = {
      user: null,
      isLoggedIn: false
    };
    

    this.api = Axios;
    this.api.defaults.baseURL = 'http://cors-anywhere.herokuapp.com/http://www.hhmlife.org/api/';
    this.api.defaults.headers.common['APP_KEY'] = 'Test@123';
    // this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // this.api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    let appState = {
      isLoggedIn: false,
      user: null
    };
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
    this.props.history.push('/login');
  }

  /**
   * Init base function
   */
  async init(){
    let page = window.location.pathname === '/'?'home':window.location.pathname;
    await this.api.get(page)
    .then((result) => {
      if(result.status === 200){
        this.setState({
          page : result.data
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}