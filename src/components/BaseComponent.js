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
    this.api.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://www.hhmlife.org/';
    this.api.defaults.headers.common['APP_KEY'] = 'Test@123';
    this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
  }

  /**
   * Init base function
   */
  init(){
    this.api.get('/')
      .then((result) => {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}