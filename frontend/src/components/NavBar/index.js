import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "../../store/index";

import { AppBar, Toolbar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";

import { signOut } from "../../services/firebase/signs";

import { useStyles } from "./styles";

import {
  appNameText,
  logoutButtonText,
  courseIconText,
} from "../../utils/strings";

const routeDashboard = "/dashboard";

function NavBar({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
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

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(dispatch, history);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            className={classes.logo}>
            {appNameText}
          </IconButton>
          <div className={classes.containerIcon}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleGoToCourse}
              className={classes.iconButton}>
              {courseIconText}
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
              className={classes.circularButton}>
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
              onClick={handleClose}>
              <div className={classes.containerMenuItem}>
                <ExitToApp></ExitToApp>
                <MenuItem onClick={handleLogout}>{logoutButtonText}</MenuItem>
              </div>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(NavBar);
