import React from 'react';
import BestSellersTableRow from './BestSellersTableRow.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './BestSellersTable.css';

class BestSellersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date || this.props.subcategory !== prevProps.subcategory) {
      this.fetchBooks();
    }
  }

  fetchBooks() {
    let url = 'https://api.nytimes.com/svc/books/v3/lists.json';
    url += '?api-key=' + process.env.REACT_APP_NYTIMES_KEY;
    url += '&list=' + this.props.subcategory;
    url += '&published-date=' + this.props.date;

    fetch(url)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.results
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    if (this.state.isLoaded) {
      return(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Book Details</TableCell>
              <TableCell>Last Week’s Rank</TableCell>
              <TableCell>Weeks on List</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <BestSellersTableRow books={this.state.books} />
          </TableBody>
        </Table>
      );
    } else {
      return(
        <div className="loading">loading...</div>
      );
    }
  }
}

export default BestSellersTable;
