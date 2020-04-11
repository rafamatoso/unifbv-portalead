import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CustomButton } from '../../components/CustomButton';
import { Copyright } from '../../components/Copyritgh';

import { routePerfil, backButtonText } from '../../utils/strings';

import { useStyles } from './styles';

export function Perfil({ history }) {
  const classes = useStyles();

  const handleSubmit = () => {
    history.goBack();
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <div className={classes.paper}>
        <h1>{routePerfil}</h1>
        <CustomButton onClick={handleSubmit} className={classes.button}>
          {backButtonText}
        </CustomButton>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}
