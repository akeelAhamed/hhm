import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/header";
import BaseComponent from './components/BaseComponent';
import NotFound from "./components/Error/NotFound";

import HomePage from "./components/HomePage/homepage";
import AboutUs from "./components/AboutUs/aboutus";
import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
// import FinalCheckOut from './components/Shop/FinalCheckOut/finalcheckout';
import CartPage from './components/Shop/CartPage/CartPage';
import ContactUs from './components/ContactUs/contactus';
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/Products/Producs';
import OrderConfirm from "./components/Shop/OrderConfirm/orderconfirm";
import CheckOut from './components/Shop/CheckOut/checkout';

// FORM
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";

// Dashboard
import Dashboard from "./components/Dashboard/Index";

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
  }

  component(props, Component) {
    return <Component {...this.state} {...props}/>;
  }

  render(){
    
    return (
      <Router>
        <Header {...this.state} {...this.props}>
        <Switch>
          <Route path="/" exact component={(props) => this.component(props, HomePage)} />
          <Route path="/about" component={(props) => this.component(props, AboutUs)} />
          <Route path="/products" exact component={(props) => this.component(props, Products) } />
          <Route path="/item/:name" component={(props) => this.component(props, ProductPage) } />
          <Route path="/cart" component={(props) => this.component(props, CartPage) } />
          <Route path="/vision" component={(props) => this.component(props, Vision) } />
          <Route path="/contactus" component={(props) => this.component(props, ContactUs) } />

          {/* Form */}
          <Route path="/login" exact component={(props) => this.component(props, Login) } />
          <Route path="/login/:after" component={(props) => this.component(props, Login) } />
          <Route path="/register" component={(props) => this.component(props, Register) } />

          {/* Auth routes */}
          <PrivateRoute authed={this.state.isLoggedIn} path='/dashboard' component={(props) => this.component(props, Dashboard)}/>
          {/* <PrivateRoute authed={this.state.isLoggedIn} path="/cartpage" component={(props) => this.component(props, CartPage) } />
          <PrivateRoute authed={this.state.isLoggedIn} path="/finalcheckout" component={(props) => this.component(props, FinalCheckOut) } /> */}
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