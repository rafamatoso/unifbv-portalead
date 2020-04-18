import React, { useState } from 'react';
import { connect, types } from '../../../store';

import { TextField, Typography } from '@material-ui/core';
import { CustomButton } from '../../../components';

import { signUp } from '../../../services/firebase';

import { useStyles } from './styles';

import { appNameText, signUpButtonText } from '../../../utils/strings';

function SignUp({ dispatch }) {
  const classes = useStyles();

  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: types.SET_LOADING, payload: true });
    signUp(state, dispatch);
  };

  const verifyButtonDisable = () => {
    return !!(
      state.email === '' ||
      state.password === ''
    );
  };

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        {`${signUpButtonText} no ${appNameText}`}
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          onChange={handleOnChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Senha"
          name="password"
          autoComplete="current-password"
          type="password"
          onChange={handleOnChange}
        />
        <div className={classes.containerBtnLoader}>
          <CustomButton
            type="submit"
            fullWidth
            disabled={verifyButtonDisable()}
            className={classes.submit}>
            {signUpButtonText}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default connect(SignUp);
