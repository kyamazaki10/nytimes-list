import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

  getSubcategories(category) {
    const subcategories = {
      nonfiction: [
        {
          name: 'Combined Print and E-Book Nonfiction',
          id: 'combined-print-and-e-book-nonfiction'
        },
        {
          name: 'Hardcover Nonfiction',
          id: 'hardcover-nonfiction'
        },
        {
          name: 'Paperback Nonfiction',
          id: 'paperback-nonfiction'
        },
        {
          name: 'Advice, How-To & Miscellaneous',
          id: 'advice-how-to-and-miscellaneous'
        }
      ],
      fiction: [
        {
          name: 'Combined Print & E-Book Fiction',
          id: 'combined-print-and-e-book-fiction'
        },
        {
          name: 'Hardcover Fiction',
          id: 'hardcover-fiction'
        },
        {
          name: 'Trade Paperback Fiction',
          id: 'trade-fiction-paperback'
        },
        {
          name: 'Paperback Fiction',
          id: 'paperback-fiction'
        }
      ],
      children: [
        {
          name: 'Children’s Middle Grade Hardcover',
          id: 'childrens-middle-grade-hardcover'
        },
        {
          name: 'Picture Books',
          id: 'picture-books'
        },
        {
          name: 'Series Books',
          id: 'series-books'
        },
        {
          name: 'Young Adult Hardcover',
          id: 'young-adult-hardcover'
        }
      ]
    };

    return subcategories[category];
  }

  renderMenuItem(category) {
    const subcategories = this.getSubcategories(category);
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
