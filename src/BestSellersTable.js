import React from 'react';
import BestSellersTableRow from './BestSellersTableRow.js';
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
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=' + process.env.REACT_APP_NYTIMES_KEY)
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
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Book Details</th>
              <th>Last Week’s Rank</th>
              <th>Weeks on List</th>
            </tr>
          </thead>
          <BestSellersTableRow books={this.state.books} />
        </table>
      );
    } else {
      return(
        <div className="loading">loading...</div>
      );
    }
  }
}

export default BestSellersTable;
