import React from 'react';
import BestSellers from './BestSellers.js';
import Header from './Header.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="best-sellers">
          <BestSellers />
        </div>
      </div>
    );
  }
}

export default App;
