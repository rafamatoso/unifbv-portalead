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
    padding: theme.spacing(2, 2),
    width: '30vw',
  },
  link: {
    padding: theme.spacing(1),
    color: colors.blue1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  copyright: {
    paddingTop: '0.5rem',
  },
}));
