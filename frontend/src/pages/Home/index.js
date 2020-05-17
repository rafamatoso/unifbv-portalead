import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, Link, Box } from '@material-ui/core';

import { Copyright } from '../../components/Copyright';
import { Auth } from '../../services/firebase/Models';
import { setUser } from '../../store/ducks/user';
import Login from './Login';
import Register from './Register';
import { useStyles } from './styles';

function Home() {
  const classes = useStyles();
  const [showRegister, setShowRegister] = useState(false);
  const intl = useIntl();
  const dontHaveAnAccountText = intl.formatMessage({
    id: 'dontHaveAnAccountText',
  });
  const createOneHereText = intl.formatMessage({ id: 'createOneHereText' });
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
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
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
                    <FormattedMessage id="alreadyHaveAAccount" />
                  </Link>
                </Grid>
              </div>
            </>
          )}
          <div>
            <Box mt={5} className={classes.copyright}>
              <Copyright />
            </Box>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Home;
