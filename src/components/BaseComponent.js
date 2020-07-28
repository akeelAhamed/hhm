import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

/**
 * Base component for this application & to be extented to all component
 */
export default class BaseComponent extends React.Component {

  constructor(props) {
    super();
    const loged = this.isLoggedIn();

    this.state = {
      user: loged,
      isLoggedIn: loged !== null
    };

    this.api = true; // Load api

    this.axios = Axios;
    this.axios.defaults.baseURL = 'http://cors-anywhere.herokuapp.com/http://www.hhmlife.org/api/';
    this.axios.defaults.headers.common['APP_KEY'] = 'Test@123';
    // this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // this.axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    
    this.back = this.back.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  isLoggedIn(){
    return localStorage.getItem('_AUTHTOKEN');
  }

  logOut() {
    let appState = {
      isLoggedIn: false,
      user: null
    };
    localStorage.removeItem('_AUTHTOKEN');
    this.setState(appState);
    this.props.history.push('/login');
  }

  /**
   * Init base function
   */
  async init(){
    let page = window.location.pathname;
    
    switch (page) {
      case "register":
        this.api = false;
        break;

      default:
        break;
    }

    let $this = this;

    if(this.api){
      await this.axios.get(page)
      .then((result) => {
        if(result.status === 200){
          $this.setState({
            page : result.data
          })
        }
      }).catch(function(error){
        if(error.response !== undefined && error.response.status === 404){
          $this.setState({
            page : true
          })
        }
      });
    }else{
      // no api request
      $this.setState({
        page : {}
      })
    }
  }

  /**
   * Generate url
   * @param {string} page 
   */
  url(page=''){
    return window.location.host+'/'+page;
  }

  /**
   * Go to back page
   * @param {object} e 
   */
  back(e){
    e.preventDefault();
    window.history.go(-1);
    return false;
  }

}