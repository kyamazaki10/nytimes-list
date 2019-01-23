import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './BestSellersTableRow.css';

class BestSellersTableRow extends React.Component {
  render() {
    let rows = [];

    for (let i=0; i<this.props.books.length; i++) {
      let book = this.props.books[i];
      let details = book.book_details[0];

      rows.push(
        <TableRow hover key={i}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>
            <div className="title">{details.title}</div>
            <div className="author">by {details.author}</div>
            <div className="description">{details.description}</div>
          </TableCell>
          <TableCell>{book.rank_last_week}</TableCell>
          <TableCell>{book.weeks_on_list}</TableCell>
        </TableRow>
      );
    }

    return rows;
  }
}

export default BestSellersTableRow;
