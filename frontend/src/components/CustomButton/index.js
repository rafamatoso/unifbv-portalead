import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../utils/colors';

export const CustomButton = withStyles(() => ({
  root: {
    backgroundColor: colors.blue3,
    fontWeight: 'bolder',
    color: colors.white1,
    '&:hover': {
      backgroundColor: colors.blue1,
      color: colors.yellow1,
    },
    '&:disabled': {
      backgroundColor: "#f1f1f1",
      color: '#c4c4c4',
    },
  },
}))(Button);