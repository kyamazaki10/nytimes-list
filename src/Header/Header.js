import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubcategoryClick = this.handleSubcategoryClick.bind(this);
  }

  handleSubcategoryClick(id) {
    this.props.onClick(id);
  }

  renderMenu() {
    const categories = [
      { id: 'nonfiction', name: 'Nonfiction' },
      { id: 'fiction', name: 'Fiction' },
      { id: 'children', name: 'Children’s' }
    ];

    return categories.map((category) =>
      <HeaderMenu key={category.id} id={category.id} name={category.name} onClick={this.handleSubcategoryClick} />
    );
  }

  render() {
    return (
      <AppBar color="primary">
        <Toolbar>
          {this.renderMenu()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
