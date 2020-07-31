import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import includes from "lodash/includes";
import has from "lodash/has";
import Spinner from "react-bootstrap/Spinner";
import NotFound from "../components/Error/NotFound";

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

    const exceptApi = ['/register', '/login', '/register', '/products/item'];

    this.pageContent = null;
    this.page = window.location.pathname;
    this.api = !includes(exceptApi, this.page); // Load api

    setTimeout(() => {
      this.init();
    }, 500);

    this.back = this.back.bind(this);
    this.logOut = this.logOut.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Init base function
   */
  init(){
    let $this = this;
    switch (this.page) {
      case "register":
        this.api = false;
        break;

      default:
        break;
    }
    
    if(this.api && !this.state.pageLoaded){
      window._axios.get($this.page)
      .then((result) => {
        if(result.status === 200){
          $this.pageContent = result.data;
          $this.setState({
            pageLoaded: true
          })
        }
      }).catch(function(error){
        if(error.response !== undefined && error.response.status === 404){
          $this.pageContent = true;
        }
      });
    }else{
      // no api request
      $this.pageContent = {};
    }
  }

  /**
   * Return pre page, eg: spinner/notfound
   */
  prePage(){
    if(this.pageContent === null){
      return (
        <div className='center'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant="primary" />
        </div>
      )
    }else if(this.pageContent === true){
      return (
        <NotFound />
      )
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

  /**
   * Is logged in
   */
  isLoggedIn(){
    return localStorage.getItem('_AUTHTOKEN');
  }

  /**
   * Logout the application
   */
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
   * Handle on change form event
   * 
   * @param object event 
   */
  onChange(event){
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  /**
   * Handle on submit form event
   * 
   * @param object event 
   */
  onSubmit(event){
    event.preventDefault();

    if(has(event.target.dataset, 'action') && has(event.target.dataset, 'method')){
      window._axios({
        method: event.target.dataset.method,
        url: event.target.dataset.action,
        data: this.state
      }).then((response) => {
        if(has(event.target.dataset, 'callback')){
          if(typeof this[event.target.dataset.callback] === "function"){
            this[event.target.dataset.callback](response);
          }
        }
      }, (error) => {
        console.log(error.response);
      });
    }
  }

}