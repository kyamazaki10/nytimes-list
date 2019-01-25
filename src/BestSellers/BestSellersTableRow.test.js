import React from 'react';
import ReactDOM from 'react-dom';
import BestSellersTableRow from './BestSellersTableRow.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BestSellersTableRow />, div);
});
