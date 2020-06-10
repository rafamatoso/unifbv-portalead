import { makeStyles } from '@material-ui/core/styles';

import { colors } from '../../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '92vh',
    backgroundColor: colors.gray2,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-around',
  },
  button: { justifyContent: 'flex-end' },
  position: {
    marginTop: theme.spacing(3),
  },
  FABaddCourse: {
    backgroundColor: colors.blue1,
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(2),
    '&:hover': {
      backgroundColor: colors.blue3,
      color: colors.blue1,
    },
    zIndex: '1',
  },
}));
