import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../services/firebase';

import { CustomButton } from '../../../components/CustomButton';
import { CustomLoader } from '../../../components/CustomLoader';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

import {
  appNameText,
  enterButtonText,
  remenberMeText,
  emailText,
  passwordText,
} from '../../../utils/strings';

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const verifyButtonDisable = () => {
    return !!(state.email === '' || state.password === '');
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .then((response) => {
        setLoading(false);
        history.push('/dashboard/perfil');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h4">
        {appNameText}
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={remenberMeText}
        />
        <div className={classes.containerBtnLoader}>
          <CustomButton
            type="submit"
            disabled={verifyButtonDisable() || loading}
            fullWidth
            className={classes.submit}>
            {enterButtonText}
          </CustomButton>
          {loading && <CustomLoader size={24}></CustomLoader>}
        </div>
      </form>
    </div>
  );
};
