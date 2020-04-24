import React from 'react';

import {Typography, Link } from '@material-ui/core';

import {UniversityLink ,appNameText, copyritghText, unifbvText} from '../../utils/strings';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${copyritghText}`}
      <Link color="inherit" href={UniversityLink}>
        {` ${appNameText} ${unifbvText}`}
      </Link>{', '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
