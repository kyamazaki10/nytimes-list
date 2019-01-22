import React from 'react';
import BestSellersTable from './BestSellersTable.js';
import './BestSellers.css';

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
  }

  render() {
    return(
      <div>
        <div className="date">{this.state.date}</div>
        <BestSellersTable date={this.state.date} />
      </div>
    );
  }
}

export default BestSellers;
