import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nonfiction: null,
      fiction: null,
      children: null
    }

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSubcategoryClick = this.handleSubcategoryClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleCategoryClick(e) {
    this.setState({
      [e.currentTarget.id]: e.currentTarget
    });
  }

  handleSubcategoryClick(id) {
    this.props.onClick(id);
  }

  handleClose() {
    for (let key in this.state) {
      if (this.state[key] !== null) {
        this.setState({
          [key]: null
        });
      }
    }
  }

  renderMenu() {
    const categories = [
      { id: 'nonfiction', name: 'Nonfiction' },
      { id: 'fiction', name: 'Fiction' },
      { id: 'children', name: 'Children’s' }
    ];
    let menu = [];

    for (let category of categories) {
      menu.push(
        <div key={category.id}>
          <Button id={category.id} onClick={this.handleCategoryClick} aria-label={category.name} className="menu-button">{category.name}</Button>
          <HeaderMenu id={category.id} anchorEl={this.state[category.id]} onClick={this.handleSubcategoryClick} onClose={this.handleClose} />
        </div>
      );
    }

    return menu;
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
