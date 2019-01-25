import React from 'react';
import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
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
            <Typography variant="subtitle1">
              <Link href={book.amazon_product_url}>{details.title}</Link>
            </Typography>
            <Typography variant="subtitle2" className="author">by {details.author}</Typography>
            <Typography variant="caption" className="description">{details.description}</Typography>
          </TableCell>
          <TableCell>{book.rank_last_week}</TableCell>
          <TableCell>{book.weeks_on_list}</TableCell>
        </TableRow>
      );
    }

    return rows;
  }
}

BestSellersTableRow.defaultProps = {
  books: []
};

export default BestSellersTableRow;
