import React from 'react';
import { useFormik } from 'formik';

import { TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../../components';

import Auth from '../../../services/firebase/Models/Auth';

import { setLoading } from '../../../Store/ducks/layout';

import { initialValues, validationSchema } from '../helper';

import { useStyles } from './styles';

import { appNameText, signUpButtonText } from '../../../utils/strings';

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
    <div className={classes.paper}>
      <Typography component="h1" variant="h4" className={classes.typography}>
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
          label="Senha"
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
  );
}

export default SignUp;
