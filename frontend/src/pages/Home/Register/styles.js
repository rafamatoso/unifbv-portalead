import { makeStyles } from '@material-ui/core';

import { colors } from '../../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(6, 4),
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
    padding: theme.spacing(0, 4.8),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
}));
