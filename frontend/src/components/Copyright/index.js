import React from 'react';

import { Typography, Link } from '@material-ui/core';

import * as i18n from '../../utils/i18n_PTBR';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${i18n.copyritghText} ${i18n.appNameText} `}
      <Link color="inherit" href={i18n.UniversityLink}>
        {`${i18n.unifbvText}`}
      </Link>

      {`, ${new Date().getFullYear()}.`}
    </Typography>
  );
}
