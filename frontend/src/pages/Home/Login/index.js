import React from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Typography, Button } from '@material-ui/core';
import { useFormik } from 'formik';

import { CustomButton } from '../../../components';
import Auth from '../../../services/firebase/Models/Auth';
import { setLoading } from '../../../store/ducks/layout';
import {
  appNameText,
  enterButtonText,
  emailText,
  passwordText,
} from '../../../utils/strings';
import { initialValues, validationSchema } from '../helper';
import { useStyles } from './styles';

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      dispatch(setLoading(true));
      try {
        await Auth.signIn(values);
      } catch (err) {
        console.err();
      }
    },
  });

  const handleHelperTextEmail = () =>
    Boolean(errors.email) && touched.email ? errors.email : null;

  const handleHelperTextPassword = () =>
    Boolean(errors.password) && touched.password ? errors.password : null;

  const verifyButtonDisable = () =>
    !!(values.email === '' || values.password === '');

  return (
    <>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" className={classes.typography}>
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
            onChange={handleChange}
            error={Boolean(errors.email) && touched.email}
            onBlur={handleBlur}
            helperText={handleHelperTextEmail()}
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
            onChange={handleChange}
            error={Boolean(errors.password) && touched.password}
            onBlur={handleBlur}
            helperText={handleHelperTextPassword()}
          />
          <CustomButton
            type="submit"
            fullWidth
            disabled={verifyButtonDisable()}
            className={classes.submit}
          >
            {enterButtonText}
          </CustomButton>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => Auth.signInWithGoogle()}
          >
            Google
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
