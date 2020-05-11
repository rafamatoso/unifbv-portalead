import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../utils/colors';

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: colors.gray2,
    marginLeft: 'auto',
    alignContent: 'flex-start',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
