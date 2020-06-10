import { makeStyles } from '@material-ui/core';

import { colors } from '../../utils/colors';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 0,
  },
  footer: {
    backgroundColor: colors.blue1,
    zIndex: theme.zIndex.drawer + 1,
    marginTop: '5px',
  },
  CopyrightName: {
    fontSize: '12px',
    color: colors.white1,
    textAlign: 'center',
    '&:hover': {
      color: colors.yellow1,
    },
    padding: theme.spacing(1.7),
  },
}));
