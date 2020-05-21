import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { Typography, Grid } from '@material-ui/core';

import { CustomButton } from '../../components';
import { useStyles } from './styles';

export default function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <Grid className={classes.notfoundstyle}>
      <Typography component="h1" variant="h4">
        <FormattedMessage id="NotFoundText" />
      </Typography>
      <CustomButton type="submit" onClick={handleClick}>
        <FormattedMessage id="GoToInicialPage" />
      </CustomButton>
    </Grid>
  );
}
