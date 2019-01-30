import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import categories from './Categories.json';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSubcategoryClick = this.handleSubcategoryClick.bind(this);
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  handleCategoryClick(e) {
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  handleSubcategoryClick(e) {
    this.props.onClick(e.currentTarget.id);
    this.handleClose();
  }

  renderMenuItem(category) {
    const subcategories = categories[category];

    return subcategories.map((subcategory) =>
      <MenuItem key={subcategory.id} id={subcategory.id} onClick={this.handleSubcategoryClick}>{subcategory.name}</MenuItem>
    );
  }

  render() {
    return(
      <Fragment>
        <Button aria-label={this.props.name} onClick={this.handleCategoryClick} className="menu-button">{this.props.name}</Button>
        <Menu id={this.props.id} anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
          {this.renderMenuItem(this.props.id)}
        </Menu>
      </Fragment>
    );
  }
}

export default HeaderMenu;
