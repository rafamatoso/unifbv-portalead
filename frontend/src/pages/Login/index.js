import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CustomButton } from '../../components/CustomButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Copyright } from '../../components/Copyritgh';

import {
  appNameText,
  enterButtonText,
  remenberMeText,
  emailText,
  passwordText,
  forgotYourPwText,
  dontHaveAnAccountText,
  createOneHereText,
} from '../../utils/strings';

import { useStyles } from './styles';

export function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const verifyButtonDisable = () => {
    return !!(email === '' || password === '');
  };

  const handleSubmit = () => {
    history.push('/dashboard/perfil');
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item sm={'auto'} md={6} className={classes.image} />
      <Grid item sm={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            {appNameText}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={emailText}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={passwordText}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={remenberMeText}
            />
            <CustomButton
              type="submit"
              disabled={verifyButtonDisable()}
              fullWidth
              className={classes.submit}
              onClick={handleSubmit}>
              {enterButtonText}
            </CustomButton>
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
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
