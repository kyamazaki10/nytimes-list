import React from 'react';
import ReactDOM from 'react-dom';
import BestSellers from './BestSellers.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BestSellers />, div);
});
