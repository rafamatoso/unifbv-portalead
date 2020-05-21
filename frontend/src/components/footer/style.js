import { makeStyles } from '@material-ui/core';

import { colors } from '../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'fixed',
    backgroundColor: colors.blue1,
    padding: theme.spacing(3),
    zIndex: theme.zIndex.drawer + 1,
  },
  CopyrightName: {
    fontSize: '17px',
    color: colors.white1,
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
}));
