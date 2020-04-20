import { makeStyles } from '@material-ui/core/styles';
import {imageBg} from '../../../assets/img';

export const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tFDescription: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',        
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '60%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    card:{
        backgroundImage: `url(${imageBg})`,  
    }
  }));