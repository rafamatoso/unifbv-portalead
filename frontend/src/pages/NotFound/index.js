import React from 'react';
import { useHistory } from 'react-router-dom';

import { Typography, Grid } from '@material-ui/core';

import { CustomButton } from '../../components';
import * as i18n from '../../utils/i18n_PTBR';
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
        {i18n.NotFoundText}
      </Typography>
      <CustomButton type="submit" onClick={handleClick}>
        {i18n.GoToInicialPage}
      </CustomButton>
    </Grid>
  );
}
