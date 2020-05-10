import React from "react";
import { useHistory } from "react-router-dom";
import { connect, types } from "../../../store";
import { useFormik } from "formik";

import { TextField, Typography } from "@material-ui/core";
import { CustomButton } from "../../../components";

import { signIn } from "../../../services/firebase/signs";

import { initialValues, validationSchema } from "../helper";

import { useStyles } from "./styles";

import {
  appNameText,
  enterButtonText,
  emailText,
  passwordText,
} from "../../../utils/strings";

function Login({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();

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
      signIn(values, dispatch, history);
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
    <>
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" className={classes.typography}>
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
        </form>
      </div>
    </>
  );
}

export default connect(Login);
