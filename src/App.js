import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import FooterPage from './components/FooterPage/footer';

import HomePage from './components/HomePage/homepage';
// import AboutUs from './components/AboutUs/aboutus';
// import Vision from "./components/VisionPage/vision";
// import BlogPage from './components/BlogPage/blogpage';
// import ContactUs from './components/ContactUs/contactus';


function App() {
  return (
    <div className="Container">
      <Header />
      <HomePage />
      {/* <Vision /> */}
      {/* <AboutUs/> */}
      {/* <BlogPage /> */}
      {/* <ContactUs /> */}
      <FooterPage />
    </div>
  );
}

export default App;
