import { makeStyles } from '@material-ui/core';

import { colors } from '../../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(6, 3),
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    color: colors.blue1,
    paddingBottom: '1rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submitLogin: {
    margin: theme.spacing(2, 0, 0),
  },
  submitGoogle: {
    margin: theme.spacing(5, 0, 0),
  },
  googleIcon: {
    height: '1.2rem',
    width: '1.2rem',
    paddingRight: '0.5rem',
  },
}));
