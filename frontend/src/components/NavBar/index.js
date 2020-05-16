import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

import Auth from '../../services/firebase/Models/Auth';
import { setLoading } from '../../store/ducks/layout';
import * as i18n from '../../utils/i18n_PTBR';
import { useStyles } from './styles';

const routeDashboard = '/dashboard';

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoToCourse = () => {
    history.push(`${routeDashboard}/courses`);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      await Auth.signOut();
      // dispatch(setUser());
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading(false));
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.logo}
          >
            {i18n.appNameText}
          </IconButton>
          <div className={classes.containerIcon}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleGoToCourse}
              className={classes.iconButton}
            >
              {i18n.courseIconText}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.circularButton}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <div className={classes.containerMenuItem}>
                <ExitToApp />
                <MenuItem onClick={handleLogout}>
                  {i18n.logoutButtonText}
                </MenuItem>
              </div>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default NavBar;
