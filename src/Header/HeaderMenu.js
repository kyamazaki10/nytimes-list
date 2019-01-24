import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import categories from './Categories.json';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleSubcategoryClick = this.handleSubcategoryClick.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  handleSubcategoryClick(e) {
    this.props.onClick(e.currentTarget.id);
  }

  renderMenuItem(category) {
    const subcategories = categories[category];
    let items = [];

    for (let subcategory of subcategories) {
      items.push(<MenuItem key={subcategory.id} id={subcategory.id} onClick={this.handleSubcategoryClick}>{subcategory.name}</MenuItem>);
    }

    return items;
  }

  render() {
    return(
      <Menu id={this.props.id} anchorEl={this.props.anchorEl} open={Boolean(this.props.anchorEl)} onClose={this.handleClose}>
        {this.renderMenuItem(this.props.id)}
      </Menu>
    );
  }
}

export default HeaderMenu;
