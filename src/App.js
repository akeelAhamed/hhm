import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import FooterPage from './components/FooterPage/footer';

import HomePage from './components/HomePage/homepage';


function App() {
  return (
    <div className="Container">
      <Header />
      <HomePage/>
      <FooterPage />
    </div>
  );
}

export default App;
