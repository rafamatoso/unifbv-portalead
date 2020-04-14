import React from 'react';
import {
  TextField,
  Typography,
} from '@material-ui/core';

import { CustomButton } from '../../../components/CustomButton';

import { useStyles } from './styles';

import { appNameText,signUpButtonText } from '../../../utils/strings';

export default function SignUp({ history }) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        {`${signUpButtonText} no ${appNameText}`}
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="Primeiro Nome"
          name="firstName"
          autoComplete="fname"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Sobrenome"
          name="lastName"
          autoComplete="lname"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
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
        />
        <div className={classes.containerBtnLoader}>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            {signUpButtonText}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
