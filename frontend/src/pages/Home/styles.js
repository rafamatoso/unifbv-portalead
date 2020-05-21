import { makeStyles } from '@material-ui/core/styles';

import { imageBg } from '../../assets/img/index';
import { colors } from '../../utils/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${imageBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    padding: theme.spacing(2, 2),
    height: '46vh',
    width: '30vw',
    minWidth: '250px',
    minHeight: '440px',
  },
  link: {
    padding: theme.spacing(0),
    color: colors.blue1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  copyright: {
    minWidth: '250px',
  },
}));
