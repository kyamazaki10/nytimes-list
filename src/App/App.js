import React from 'react';
import BestSellers from '../BestSellers/BestSellers.js';
import Header from '../Header/Header.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BestSellers />
      </div>
    );
  }
}

export default App;
