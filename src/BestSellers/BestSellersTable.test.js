import React from 'react';
import ReactDOM from 'react-dom';
import BestSellersTable from './BestSellersTable.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BestSellersTable />, div);
});
