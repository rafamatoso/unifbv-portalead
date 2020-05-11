import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoToInicialPage, NotFoundText } from '../../utils/strings';
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
        {NotFoundText}
      </Typography>
      <CustomButton type="submit" onClick={handleClick}>
        {GoToInicialPage}
      </CustomButton>
    </Grid>
  );
}
