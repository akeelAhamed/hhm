import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/Error/NotFound";

import HomePage from "./components/HomePage/homepage";
import AboutUs from "./components/AboutUs/aboutus";
import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
import ContactUs from './components/ContactUs/contactus';
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/Products/Producs';
import CartPage from './components/Shop/CartPage/CartPage';
import LoginPage from './components/Shop/LoginPage/LoginPage';
import FinalCheckOut from './components/Shop/FinalCheckOut/finalcheckout';
import OrderConfirm from "./components/Shop/OrderConfirm/orderconfirm";
import CheckOut from './components/Shop/CheckOut/checkout';

import Login from "./components/Form/Login";
import Register from "./components/Form/Register";

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

export default class App extends React.Component{

  constructor(props){
    super();
    this.state = {
      headerFooter: null,
      pageLoaded: true
    };
  }

  component(Component) {
    return <Component {...this.state}/>;
  }

  render(){
    
    return (
      <Router>
        <Header page={this.state.headerFooter}>
        <Switch>
          <Route path="/" exact render={(props) => this.component(HomePage)} />
          <Route path="/about" component={(props) => this.component(AboutUs)} />
          <Route path="/products" exact component={(props) => this.component(Products) } />
          <Route path="/products/:name" component={(props) => this.component(ProductPage) } />
          <Route path="/vision" component={(props) => this.component(Vision) } />
          <Route path="/contactus" component={(props) => this.component(ContactUs) } />
          <Route path="/cartpage" component={(props) => this.component(CartPage) } />
          <Route path="/loginpage" component={(props) => this.component(LoginPage) } />
          <Route path="/checkout" component={(props) => this.component(CheckOut) } />
          <Route path="/finalcheckout" component={(props) => this.component(FinalCheckOut) } />
          <Route path="/orderconfirm" component={(props) => this.component(OrderConfirm) } />

          {/* Form */}
          <Route path="/login" component={(props) => this.component(Login) } />
          <Route path="/register" component={(props) => this.component(Register) } />

          <PrivateRoute authed={this.state.isLoggedIn} path='/dashboard' component={(props) => (<h1>Hi</h1>)}/>

          <Route component={NotFound} />
        </Switch>
        </Header>
      </Router>
    );
  }
}