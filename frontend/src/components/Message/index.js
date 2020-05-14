import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Snackbar, Slide } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { rmMessage } from '../../store/ducks/layout';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Message() {
  const message = useSelector((state) => state.layout.message);
  const dispatch = useDispatch();

  const handleClose = (i) => {
    dispatch(rmMessage(i));
  };

  return message.map((item, i) => {
    setTimeout(() => {
      handleClose(i);
    }, item.time || 2500);

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open
        TransitionComponent={TransitionUp}
        onClose={() => handleClose(i)}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => handleClose(i)}
          severity="success"
          style={{ width: 200 }}
        >
          {item.message}
        </Alert>
      </Snackbar>
    );
  });
}
export default Message;
