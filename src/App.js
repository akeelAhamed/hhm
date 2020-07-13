import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
// import Main from './components/AboutUs/main';
// import Footer from './components/Footer/footer';

import HomePage from './components/HomePage/homepage';


function App() {
  return (
    <div className="container">
      <Header />
      {/* <Main /> */}
       <HomePage/>
    </div>
  );
}

export default App;
