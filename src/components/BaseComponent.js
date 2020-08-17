import React from "react";
import includes from "lodash/includes";
import has from "lodash/has";
import each from "lodash/each";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
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
      isLoggedIn: loged !== '',
      disabled: false,
      errors  : [],
      pageLoaded: false
    };

    window.scrollTo(0, 0);

    const exceptApi = ['/register', '/login', '/forgot', '/reset', '/dashboard', '/track', '/cart', '/checkout','/privacy','/terms', '/about', '/benifits', '/hypothesis', '/science', '/contact'];

    this.pageContent = null;
    this.page = window.location.pathname;
    this.api = !includes(exceptApi, this.page.toLowerCase()); // Load api

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
          if(result.data !== ''){
            $this.pageContent = result.data;
            $this.setState({
              pageLoaded: true
            })
          }
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
   * Is logged in
   */
  isLoggedIn(){
    return window.ls.get('_AUTHTOKEN');
  }

  /**
   * Loggedin user
   * 
   * @param {object} data
   * @param {string} data
   */
  login(data, after=""){
    after = after===""?'dashboard':after;
    window.ls.set('_AUTHTOKEN', data);
    return window.location.href = after;
  }

  /**
   * Logout the application
   */
  logOut() {
    window.ls.remove('_AUTHTOKEN');
    window.location.href = '/login';
  }

  /**
   * Handle on change form event
   * 
   * @param object event 
   */
  onChange(event){
    const {name, value} = event.target;
    let name2 = name.split('.');
    (name2.length === 2)?
    this.setState({
      [name2[0]]:{
        ...this.state[name2[0]],
        [name2[1]]: value
      }
    })
    :this.setState({[name]: value});
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
      this.setError([]);
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
        this.toggleDisable();
        if(has(data, 'callback')){
          if(typeof this[data.callback] === "function"){
            return this[data.callback](error.response.data);
          }
        }
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
   * Add to cart
   * 
   * @param {object} data
   * @param {int}    qty 
   */
  addCart(data, qty=1){
    data._qty = qty;
    return window.ls.set('_CART', data);
  }

  /**
   * Get cart data
   * 
   */
  getCart(){
    return window.ls.get('_CART')
  }

  /**
   * Empty cart data
   * 
   */
  emptyCart(){
    window.ls.remove('_CART')
    return window.history.go(-1);;
  }

  /**
   * Set error state
   * 
   * @param {array|object} errors 
   */
  setError(errors=[]){
    let error = [];
    each(errors, (val, i) => {
      error.push(<li key={i}>{val}</li>);
    })
    this.setState({
      errors: error
    })
  }

  /**
   * Get error message
   */
  getError(variant="danger"){
    if(this.state.errors.length !== 0){
      return(
        <Alert className="mt-2" variant={variant}>
          <Alert.Heading as={"h5"}>
            {(variant === "danger")?"Some error occurs":"New notification"}
          </Alert.Heading>
          <div className={"border-top pl-3"}>
            <ul>{this.state.errors}</ul>
          </div>
        </Alert>
      )
    }
  }

  
  /**
   * Redirect to url
   * 
   * @param {string} page 
   */
  redirect(page=''){
    return this.props.history.push('/'+page);
  }

  /**
   * Go to back page
   * @param {object} e 
   */
  back(e=null){
    e===null||e.preventDefault();
    window.history.go(-1);
    return false;
  }
}