import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SecureLS from "secure-ls";
import Axios from "axios";
import * as serviceWorker from './serviceWorker';

window.window._axios = Axios;
window._axios.defaults.baseURL = 'https://admin.hhmworld.com/api/';
window._axios.defaults.headers.common['Content-Type'] = 'application/json';
window._axios.defaults.headers.common['Authorization'] = 'Test@123';
// window._axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// window._axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

window.ls = new SecureLS({isCompression: false, encryptionSecret: 'Test@123'});

ReactDOM.render(
  <React.Fragment>
      <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
