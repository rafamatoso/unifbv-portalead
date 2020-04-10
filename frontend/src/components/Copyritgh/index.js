import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {appName, copyritgh, unifbv} from '../../utils/strings';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${copyritgh}`}
      <Link color="inherit" href="https://material-ui.com/">
        {` ${appName} ${unifbv}`}
      </Link>{', '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
