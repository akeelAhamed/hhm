import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseComponent from "./components/BaseComponent";
import Header from "./components/Header/header";
import FooterPage from "./components/FooterPage/footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./components/HomePage/homepage";
import NotFound from "./components/Error/NotFound";
import AboutUs from "./components/AboutUs/aboutus";
import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
import ContactUs from './components/ContactUs/contactus';
import ProductPage from './components/ProductPage/ProductPage';
import CartPage from './components/Shop/CartPage/CartPage';
import LoginPage from './components/Shop/LoginPage/LoginPage';
import FinalCheckOut from './components/Shop/FinalCheckOut/finalcheckout';
import OrderConfirm from "./components/Shop/OrderConfirm/orderconfirm";
import CheckOut from './components/Shop/CheckOut/checkout';
import { Spinner } from "react-bootstrap";

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

class App extends BaseComponent{

  constructor(props){
    super();
    this.state = {
      page : null
    };
    this.init();
  }

  component(Component) {
    return <Component {...this.state}/>;
  }

  render(){

    if(this.state.page === null){
      return (
        <div className='center'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant="primary" />
        </div>
      )
    }

    if(this.state.page === true){
      return (
        <NotFound />
      )
    }
    
    return (
      <Router>
        {!this.api || <Header {...this.state} />}
        <Switch>
          <Route path="/" exact render={(props) => this.component(HomePage)} />
          <Route path="/about" component={(props) => this.component(AboutUs)} />
          <Route path="/product" component={(props) => this.component(ProductPage) } />
          <Route path="/vision" component={(props) => this.component(Vision) } />
          <Route path="/contactus" component={(props) => this.component(ContactUs) } />
          <Route path="/cartpage" component={(props) => this.component(CartPage) } />
          <Route path="/loginpage" component={(props) => this.component(LoginPage) } />
          <Route path="/checkout" component={(props) => this.component(CheckOut) } />
          <Route path="/finalcheckout" component={(props) => this.component(FinalCheckOut) } />
          <Route path="/orderconfirm" component={(props) => this.component(OrderConfirm) } />

          <PrivateRoute authed={this.state.isLoggedIn} path='/dashboard' component={(props) => (<h1>Hi</h1>)}/>

          <Route component={NotFound} />
        </Switch>

        {!this.api || <FooterPage {...this.state}/>}
      </Router>
    );
  }
}

export default App;