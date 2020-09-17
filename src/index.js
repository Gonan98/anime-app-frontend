import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootswatch/dist/lux/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000';  
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);