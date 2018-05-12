import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';



// import registerServiceWorker from './registerServiceWorker';


import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));


// registerServiceWorker();
