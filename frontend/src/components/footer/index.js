import React from 'react';

import { Typography, Link } from '@material-ui/core';

import {
  UniversityLink,
  appNameText,
  copyritghText,
  unifbvText,
} from '../../utils/strings';
import { useStyles } from './style';

// import { logoCircularGrande } from '../../assets/img';

export default function Appfooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Typography className={classes.CopyrightName}>
          {`${copyritghText} ${appNameText} `}
          <Link color="inherit" href={UniversityLink}>
            {`${unifbvText}`}
          </Link>

          {`, ${new Date().getFullYear()}.`}
        </Typography>
      </footer>
    </>
  );
}
