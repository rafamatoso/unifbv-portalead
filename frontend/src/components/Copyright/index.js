import React from 'react';
import { useIntl } from 'react-intl';

import { Typography, Link } from '@material-ui/core';

export function Copyright() {
  const intl = useIntl();
  const copyritghText = intl.formatMessage({ id: 'copyritghText' });
  const appNameText = intl.formatMessage({ id: 'appNameText' });
  const UniversityLink = intl.formatMessage({ id: 'UniversityLink' });
  const unifbvText = intl.formatMessage({ id: 'unifbvText' });
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
