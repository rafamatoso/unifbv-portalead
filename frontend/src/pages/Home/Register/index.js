import React from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';

import { CustomButton } from '../../../components';
import Auth from '../../../services/firebase/Models/Auth';
import { setLoading } from '../../../store/ducks/layout';
import {
  appNameText,
  signUpButtonText,
  emailText,
  passwordText,
} from '../../../utils/strings';
import { initialValues, validationSchema } from '../helper';
import { useStyles } from './styles';

function SignUp() {
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
      const data = await Auth.signUp(values);
      dispatch(setLoading(false));
      console.log(data);
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
          {`${signUpButtonText} no ${appNameText}`}
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
            id="password"
            label={passwordText}
            name="password"
            autoComplete="current-password"
            type="password"
            onChange={handleChange}
            error={Boolean(errors.password) && touched.password}
            onBlur={handleBlur}
            helperText={handleHelperTextPassword()}
          />
          <div className={classes.containerBtnLoader}>
            <CustomButton
              type="submit"
              fullWidth
              disabled={verifyButtonDisable()}
              className={classes.submit}
            >
              {signUpButtonText}
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
