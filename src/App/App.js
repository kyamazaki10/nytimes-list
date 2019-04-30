import React, { Fragment } from 'react';
import BestSellers from '../BestSellers/BestSellers.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: 'hardcover-fiction'
    };

    this.changeSubcategory = this.changeSubcategory.bind(this);
  }

  changeSubcategory(id) {
    this.setState({
      subcategory: id
    });
  }

  render() {
    return (
      <Fragment>
        <Header onClick={this.changeSubcategory} />
        <BestSellers subcategory={this.state.subcategory} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
