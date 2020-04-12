import React, { useState } from "react";

import { AppBar, Toolbar, IconButton, MenuItem, Menu } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { useStyles } from "./styles";

import {
  appNameText,
  optionAText,
  optionBText,
  painelIconText,
} from "../../utils/strings";

export function NavBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //   const handleChange = (e) => {
  //     setAuth(e.target.checked);
  //   };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {appNameText}
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            size="small"
            aria-label="menu"
          >
            {painelIconText}
          </IconButton>
          {auth && (
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{optionAText}</MenuItem>
                <MenuItem onClick={handleClose}>{optionBText}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
