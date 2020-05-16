import React from 'react';

import { Link } from '@material-ui/core';

import {
  UniversityLink,
  appNameText,
  copyritghText,
  unifbvText,
} from '../../utils/strings';
import { CustomTypography } from './styles';

export function Copyright() {
  return (
    <CustomTypography variant="body1" color="textSecondary" align="center">
      {`${copyritghText} ${appNameText} `}
      <Link color="inherit" href={UniversityLink}>
        {`${unifbvText}`}
      </Link>

      {`, ${new Date().getFullYear()}.`}
    </CustomTypography>
  );
}
