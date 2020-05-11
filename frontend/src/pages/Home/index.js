import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, Link, Box } from '@material-ui/core';

import { Copyright } from '../../components/Copyright';
import { Auth } from '../../services/firebase/Models';
import { setUser } from '../../store/ducks/user';
import {
  dontHaveAnAccountText,
  createOneHereText,
  alreadyHaveAAccount,
} from '../../utils/strings';
import Login from './Login';
import Register from './Register';
import { useStyles } from './styles';

function Home() {
  const classes = useStyles();
  const [showRegister, setShowRegister] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  Auth.observerUser((user) => {
    dispatch(setUser(user));
    if (user) {
      history.push('/dashboard/courses');
    }
  });

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid item sm="auto" md={6} className={classes.image} />
        <Grid item sm={12} md={6} component={Paper} elevation={6} square>
          {!showRegister ? (
            <>
              <Login />
              <div className={classes.link}>
                <Grid item>
                  <Link variant="body2" onClick={handleShowRegister}>
                    {`${dontHaveAnAccountText} ${createOneHereText}`}
                  </Link>
                </Grid>
              </div>
            </>
          ) : (
            <>
              <Register />
              <div className={classes.link}>
                <Grid item>
                  <Link variant="body2" onClick={handleShowRegister}>
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

export default Home;
