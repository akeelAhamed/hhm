import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/header";
import FooterPage from "./components/FooterPage/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import HomePage from "./components/HomePage/homepage";
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
import { connect } from "react-redux";
import * as actions from './components/store/actions/index'
import Spinner from './components/UI/Spinner/Spinner'

function App(props) {

  useEffect(() => {
    props.loadData()
  }, [])

  return (
    <Router>
      {props.loading ? 
      <div className='Container'>
        <Spinner /> 
      </div>:
      <div className="Container">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/product" component={ProductPage} />
          <Route path="/vision" component={Vision} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/cartpage" component={CartPage} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/finalcheckout" component={FinalCheckOut} />
          <Route path="/orderconfirm" component={OrderConfirm} />
        </Switch>

        <FooterPage />
      </div>
      }
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(actions.loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
