import React from "react";
import { connect, types } from "../../../store";
import { useFormik } from "formik";

import { TextField, Typography } from "@material-ui/core";
import { CustomButton } from "../../../components";

import { signUp } from "../../../services/firebase/signs";

import { initialValues, validationSchema } from "../helper";

import { useStyles } from "./styles";

import { appNameText, signUpButtonText } from "../../../utils/strings";

function SignUp({ dispatch }) {
  const classes = useStyles();

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
    onSubmit: (values) => {
      dispatch({ type: types.SET_LOADING, payload: true });
      signUp(values, dispatch);
    },
  });

  const handleHelperTextEmail = () => {
    return Boolean(errors.email) && touched.email ? errors.email : null;
  };

  const handleHelperTextPassword = () => {
    return Boolean(errors.password) && touched.password
      ? errors.password
      : null;
  };

  const verifyButtonDisable = () => {
    return !!(values.email === "" || values.password === "");
  };

  return (
    <div className={classes.paper}>
      <Typography component='h1' variant='h4' className={classes.typography}>
        {`${signUpButtonText} no ${appNameText}`}
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='E-mail'
          name='email'
          autoComplete='email'
          onChange={handleChange}
          error={Boolean(errors.email) && touched.email}
          onBlur={handleBlur}
          helperText={handleHelperTextEmail()}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='password'
          label='Senha'
          name='password'
          autoComplete='current-password'
          type='password'
          onChange={handleChange}
          error={Boolean(errors.password) && touched.password}
          onBlur={handleBlur}
          helperText={handleHelperTextPassword()}
        />
        <div className={classes.containerBtnLoader}>
          <CustomButton
            type='submit'
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
