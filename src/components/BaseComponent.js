import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

/**
 * Base component for this application & to be extented to all component
 */
export default class BaseComponent extends React.Component {

  constructor(props) {
    super();
    this.api = Axios;
    this.api.defaults.baseURL = 'http://www.hhmlife.org/';
    //this.api.defaults.baseURL = 'https://reqres.in/api/';
    this.api.defaults.headers.common['APP_KEY'] = 'Test@123';
    //this.api.defaults.headers.common['Accept']  = 'application/json';
    this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    //this.api.defaults.withCredentials = true;
    //this.api.defaults.crossDomain = true;
  }

  /**
   * Init base function
   */
  init(){
    // fetch("http://www.hhmlife.org/")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
          
    //     }
    //   )
    this.api.get('/')
      .then((result) => {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}