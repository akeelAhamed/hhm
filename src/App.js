import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import FooterPage from "./components/FooterPage/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/homepage";
import AboutUs from "./components/AboutUs/aboutus";
// import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
import ContactUs from './components/ContactUs/contactus';

function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
