import React from 'react';

import { Grid, Paper, Link, Box } from '@material-ui/core';
import { Login } from './Login';
import { Copyright } from '../../components/Copyritgh';

import { useStyles } from './styles';

import {
  forgotYourPwText,
  dontHaveAnAccountText,
  createOneHereText,
} from '../../utils/strings';

export function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid item sm={'auto'} md={6} className={classes.image} />
        <Grid item sm={12} md={6} component={Paper} elevation={6} square>
          <Login></Login>
          <div className={classes.paper}>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {forgotYourPwText}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {`${dontHaveAnAccountText} ${createOneHereText}`}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
