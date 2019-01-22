import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header() {
  return <h1>The New York Times Best Sellers List</h1>;
}

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
          <BestSeller books={this.state.books} />
        </table>
      );
    } else {
      return(
        <div className="loading">loading...</div>
      );
    }
  }
}

class BestSeller extends React.Component {
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

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="best-sellers">
          <BestSellers />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
