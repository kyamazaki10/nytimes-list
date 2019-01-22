import React from 'react';
import BestSellers from './BestSellers.js';
import Header from './Header.js';
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
