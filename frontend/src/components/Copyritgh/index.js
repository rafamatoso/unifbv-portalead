import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {appNameText, copyritghText, unifbvText} from '../../utils/strings';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${copyritghText}`}
      <Link color="inherit" href="https://material-ui.com/">
        {` ${appNameText} ${unifbvText}`}
      </Link>{', '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
