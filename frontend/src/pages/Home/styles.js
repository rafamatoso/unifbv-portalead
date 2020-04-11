import { makeStyles } from '@material-ui/core/styles';
import { imageBg } from '../../assets/img/index';

export const useStyles = makeStyles((theme) => ({
         root: {
           height: '100vh',
         },
         image: {
           backgroundImage: `url(${imageBg})`,
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           width: '100vw',
           height: '100vh',
         },
         paper: {
           marginTop: 0,
           margin: theme.spacing(4),
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         },
       }));
