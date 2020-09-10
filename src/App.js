import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import includes from "lodash/includes";
import Header from "./components/Header/header";
import BaseComponent from './components/BaseComponent';
import NotFound from "./components/Error/NotFound";

import HomePage from "./components/HomePage/homepage";
import AboutUs from "./components/AboutUs/aboutus";
import Benifits from "./components/AboutUs/benifits";
import Privacy from "./components/AboutUs/privacy";
import Terms from "./components/AboutUs/terms";
import Hypothesis from "./components/AboutUs/hypothesis";
import Science from "./components/AboutUs/science";
import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
import CartPage from './components/Shop/CartPage/CartPage';
import ContactUs from './components/ContactUs/contactus';
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/Products/Producs';
import OrderConfirm from "./components/Shop/OrderConfirm/orderconfirm";
import CheckOut from './components/Shop/CheckOut/checkout';

// FORM
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";
import Forget from "./components/Form/Forget";
import Reset from "./components/Form/Reset";

// Dashboard
import Dashboard from "./components/Dashboard/Index";
import Track from "./components/Dashboard/Track";
import Landing from "./components/Landing/Landing";
import Thankyou from "./components/Landing/Thankyou";

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component{

  constructor(props){
    super();
    const base = new BaseComponent(props, false);
    const loged = base.isLoggedIn();
    this.state = {
      user: loged,
      isLoggedIn: loged !== '',
      headerFooter: null,
      pageLoaded: false
    };
    this.noHeader = ['/promo', '/promo/thankyou']
  }

  component(props, Component) {
    return <Component {...this.state} {...props}/>;
  }

  render(){
    let page = window.location.pathname;
    
    if(includes(this.noHeader, page.toLowerCase())){
      return (
        <Router>
          <Switch>
            <Route path="/promo" exact component={(props) => this.component(props, Landing)} />
            <Route path="/promo/thankyou" component={(props) => this.component(props, Thankyou)} />
          </Switch>
        </Router>
      )
    }

    return (
      <Router>
        <Header {...this.state} {...this.props}>
          <Switch>
            <Route path="/" exact component={(props) => this.component(props, HomePage)} />
            <Route path="/about" component={(props) => this.component(props, AboutUs)} />
            <Route path="/benifits" component={(props) => this.component(props, Benifits)} />
            <Route path="/privacy" component={(props) => this.component(props, Privacy)} />
            <Route path="/terms" component={(props) => this.component(props, Terms)} />
            <Route path="/hypothesis" component={(props) => this.component(props, Hypothesis)} />
            <Route path="/science" component={(props) => this.component(props, Science)} />
            <Route path="/products" exact component={(props) => this.component(props, Products) } />
            <Route path="/item/:name" component={(props) => this.component(props, ProductPage) } />
            <Route path="/cart" component={(props) => this.component(props, CartPage) } />
            <Route path="/vision" component={(props) => this.component(props, Vision) } />
            <Route path="/contact" component={(props) => this.component(props, ContactUs) } />

            {/* Form */}
            <Route path="/login" exact component={(props) => this.component(props, Login) } />
            <Route path="/login/:after" component={(props) => this.component(props, Login) } />
            <Route path="/register" component={(props) => this.component(props, Register) } />
            <Route path="/forgot" component={(props) => this.component(props, Forget) } />
            <Route path="/reset" component={(props) => this.component(props, Reset) } />

            {/* Auth routes */}
            <PrivateRoute authed={this.state.isLoggedIn} path='/dashboard' component={(props) => this.component(props, Dashboard)}/>
            <PrivateRoute authed={this.state.isLoggedIn} path='/track' component={(props) => this.component(props, Track)}/>
            <PrivateRoute authed={this.state.isLoggedIn} path="/checkout" component={(props) => this.component(props, CheckOut) } />
            <PrivateRoute authed={this.state.isLoggedIn} path="/orderconfirm" component={(props) => this.component(props, OrderConfirm) } />

            <Route component={NotFound} />
          </Switch>
        </Header>
      </Router>
    );
  }
}

export default App;