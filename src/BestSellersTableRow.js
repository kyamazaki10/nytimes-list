import React from 'react';
import './BestSellersTableRow.css';

class BestSellersTableRow extends React.Component {
  renderRow() {
    let rows = [];

    for (let i=0; i<this.props.books.length; i++) {
      let book = this.props.books[i];
      let details = book.book_details[0];

      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>
            <div className="title">{details.title}</div>
            <div className="author">by {details.author}</div>
            <div className="description">{details.description}</div>
          </td>
          <td>{book.rank_last_week}</td>
          <td>{book.weeks_on_list}</td>
        </tr>
      );
    }

    return rows;
  }

  render() {
    return(
      <tbody>{this.renderRow()}</tbody>
    );
  }
}

export default BestSellersTableRow;
