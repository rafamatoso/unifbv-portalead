import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../utils/colors';

export const CustomLoader = withStyles(() => ({
  root: {
    color: colors.yellow1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -12,
  },
}))(CircularProgress);
