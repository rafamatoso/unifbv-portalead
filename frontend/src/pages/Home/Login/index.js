import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, types } from '../../../store';

import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { CustomButton } from '../../../components';

import { signIn } from '../../../services/firebase';

import { useStyles } from './styles';

import {
  appNameText,
  enterButtonText,
  remenberMeText,
  emailText,
  passwordText,
} from '../../../utils/strings';

function Login({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
  
  const initialState = { email: '', password: '' };

  const [state, setState] = useState(initialState)

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    e.preventDefault();
    signIn(state, dispatch, history);
  };

  const verifyButtonDisable = () => {
    return !!(state.email === '' || state.password === '');
  };

  return (
    <>
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
              fullWidth
              disabled={verifyButtonDisable()}
              className={classes.submit}>
              {enterButtonText}
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default connect(Login);
