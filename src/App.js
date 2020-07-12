import React from 'react';
import './App.css';
import Header from './components/Header/header';
// import Main from './components/AboutUs/main';
import Footer from './components/Footer/footer';

import HomePage from './components/HomePage/homepage';


function App() {
  return (
    <div className="container">
      <Header />
      {/* <Main /> */}
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
