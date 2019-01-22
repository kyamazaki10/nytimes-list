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
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Book</th>
            <th>Last Week's Rank</th>
            <th>Weeks on List</th>
          </tr>
        </thead>
        <tbody>
          <BestSeller />
        </tbody>
      </table>
    );
  }
}

class BestSeller extends React.Component {
  render() {
    return(
      <tr>
        <td>1</td>
        <td>
          <div>
            <div className="title">AN ANONYMOUS GIRL</div>
            <div className="author">by Greer Hendricks and Sarah Pekkanen</div>
            <div className="description">Jessica Farris’s life unravels when she signs up for Dr. Shields’s psychology study.</div>
          </div>
        </td>
        <td>1</td>
        <td>10</td>
      </tr>
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
