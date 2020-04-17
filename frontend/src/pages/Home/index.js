import React, { useState } from 'react';

import { Grid, Paper, Link, Box } from '@material-ui/core';
import { Copyright } from '../../components/Copyritgh';

import Login from './Login';
import Register from './Register';

import { useStyles } from './styles';

import {
  dontHaveAnAccountText,
  createOneHereText,
  alreadyHaveAAccount
} from '../../utils/strings';

export function Home() {
  const classes = useStyles();
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(!showRegister)
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid item sm={'auto'} md={6} className={classes.image} />
        <Grid item sm={12} md={6} component={Paper} elevation={6} square>
          {!showRegister ? (
            <>
              <Login></Login>
              <div className={classes.link}>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={handleShowRegister}>
                    {`${dontHaveAnAccountText} ${createOneHereText}`}
                  </Link>
                </Grid>
              </div>
            </>
          ) : (
            <>
              <Register></Register>
              <div className={classes.link}>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={handleShowRegister}>
                    {alreadyHaveAAccount}
                  </Link>
                </Grid>
              </div>
            </>
          )}
          <div className={classes.paper}>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
