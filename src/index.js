import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About/About.js';
import App from './App/App.js';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/nytimes-list/' component={App} />
      <Route path='/nytimes-list/about' component={About} />
    </div>
  </Router>
), document.getElementById('root'));
