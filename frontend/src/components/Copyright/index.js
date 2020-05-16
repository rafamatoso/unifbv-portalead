import React from 'react';

import { Typography, Link } from '@material-ui/core';

import {
  UniversityLink,
  appNameText,
  copyritghText,
  unifbvText,
} from '../../utils/i18n_PTBR';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${copyritghText} ${appNameText} `}
      <Link color="inherit" href={UniversityLink}>
        {`${unifbvText}`}
      </Link>

      {`, ${new Date().getFullYear()}.`}
    </Typography>
  );
}
