import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const CustomTypography = withStyles(() => ({
  root: {
    fontSize: '0.8rem',
  },
}))(Typography);
