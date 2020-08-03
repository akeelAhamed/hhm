import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import includes from "lodash/includes";
import has from "lodash/has";
import each from "lodash/each";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import NotFound from "../components/Error/NotFound";

/**
 * Base component for this application & to be extented to all component
 */
export default class BaseComponent extends React.Component {

  constructor(props, init=true) {
    super();
    const loged = this.isLoggedIn();

    this.state = {
      user: loged,
      isLoggedIn: loged !== null,
      disabled: false,
      errors  : [],
      pageLoaded: false
    };

    const exceptApi = ['/register', '/login', '/register', '/item'];

    this.pageContent = null;
    this.page = window.location.pathname;
    this.api = !includes(exceptApi, this.page); // Load api

    setTimeout(() => {
      (!init)||this.init();
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
      $this.setState({
        pageLoaded: true
      })
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
    return window.location.origin+'/'+page;
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
      this.toggleDisable();
      const data = event.target.dataset;
      window._axios({
        method: data.method,
        url: data.action,
        data: this.state
      }).then((response) => {
        this.toggleDisable();
        if(has(data, 'callback')){
          if(typeof this[data.callback] === "function"){
            return this[data.callback](response.data);
          }
        }
        console.log(response);
      }, (error) => {
        console.log(error.response);
      });
    }
  }

  /**
   * Toggle disabled state
   */
  toggleDisable(){
    this.setState({disabled: !this.state.disabled});
  }

  /**
   * Set error state
   * 
   * @param {array|object} errors 
   */
  setError(errors){
    let error = [];
    each(errors, (val, i) => {
      console.log(i, val);
      error.push(<li key={i}>{val}</li>);
    })
    this.setState({
      errors: error
    })
  }

  /**
   * Get error message
   */
  getError(){
    return(
      <Toast show={this.state.errors.length !== 0}  className="m-auto">
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">Some error occurs</strong>
          <small>{Math.floor(Math.random() * 10)} seconds ago</small>
        </Toast.Header>
        <Toast.Body className="text-danger">
          <ul>{this.state.errors}</ul>
        </Toast.Body>
      </Toast>)
  }

}