import React from "react";
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}
export default App;
