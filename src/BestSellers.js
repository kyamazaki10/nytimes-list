import React from 'react';
import BestSellersDatePicker from './BestSellersDatePicker.js';
import BestSellersTable from './BestSellersTable.js';
import './BestSellers.css';

class BestSellers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.formatDate(new Date())
    };

    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(newDate) {
    this.setState({
      date: newDate
    });
  }

  formatDate(date) {
    const mm = this.formatDatePadding(date.getMonth() + 1);
    const dd = this.formatDatePadding(date.getDate());

    return [date.getFullYear(), mm, dd].join('-');
  }

  formatDatePadding(number) {
    return number.toString().padStart(2, "0");
  }

  render() {
    return(
      <div className="best-sellers">
        <BestSellersDatePicker date={this.state.date} changeDate={this.changeDate} />
        <BestSellersTable date={this.state.date} />
      </div>
    );
  }
}

export default BestSellers;
