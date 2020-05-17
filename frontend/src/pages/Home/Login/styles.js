import { makeStyles } from '@material-ui/core';

import { colors } from '../../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3, 3),
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    // marginTop: '10px',
    maxWidth: '8rem',
    maxHeight: '8rem',
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.blue1,
    height: '100%',
    width: '100%',
    fontSize: '3rem',
    padding: '0.5rem',
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
