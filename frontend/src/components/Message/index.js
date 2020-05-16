import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Snackbar, Slide } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { hideMessage } from '../../store/ducks/layout';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Message() {
  const message = useSelector((state) => state.layout.message);
  const dispatch = useDispatch();

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideMessage());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(message)}
      autoHideDuration={message?.time}
      TransitionComponent={TransitionUp}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={message?.type || 'success'}
        style={{ width: 300 }}
      >
        {message?.message}
      </Alert>
    </Snackbar>
  );
}
export default Message;
