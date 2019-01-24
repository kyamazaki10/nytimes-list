import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About/About.js';
import App from './App/App.js';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
    </div>
  </Router>
), document.getElementById('root'));
