import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from "axios";
import * as serviceWorker from './serviceWorker';

window.window._axios = Axios;
window._axios.defaults.baseURL = 'http://cors-anywhere.herokuapp.com/http://www.hhmlife.org/api/';
//window._axios.defaults.baseURL = 'http://www.hhmlife.org/api/';
window._axios.defaults.headers.common['APP_KEY'] = 'Test@123';
// window._axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// window._axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

ReactDOM.render(
  <React.Fragment>
      <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
