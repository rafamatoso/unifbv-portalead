import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';

function Loading() {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.layout);
  return loading ? (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : null;
}

export default Loading;
