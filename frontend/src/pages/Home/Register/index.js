import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';

import { CustomButton } from '../../../components';
import Auth from '../../../services/firebase/Models/Auth';
import { setLoading, showMessage } from '../../../store/ducks/layout';
import { severityTypes } from '../../../utils/severityTypes';
import { initialValues, validationSchema } from '../helper';
import { useStyles } from './styles';

function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intl = useIntl();
  const email = intl.formatMessage({ id: 'emailText' });
  const password = intl.formatMessage({ id: 'passwordText' });

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
      dispatch(
        showMessage({
          message: `Email ${data.user.toJSON().email} cadastrado`,
          time: 5000,
          type: severityTypes.SUCCESS,
        }),
      );
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
          <FormattedMessage id="signUpButtonText" />
          &nbsp;
          <FormattedMessage id="appNameTextAt" />
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={email}
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
            label={password}
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
              <FormattedMessage id="signUpButtonText" />
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
