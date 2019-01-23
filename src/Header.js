import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

function Header() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton aria-label="Menu" className="icon">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="category">
          Hardcover Fiction
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
