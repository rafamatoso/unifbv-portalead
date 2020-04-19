import React from 'react';

import { Box, Container } from '@material-ui/core';
import { Copyright } from '../../components/Copyritgh';

import { connect } from '../../store';

import { routePerfil } from '../../utils/strings';

import { useStyles } from './styles';

function Perfil({ dispatch }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <div className={classes.paper}>
        <h1>
          {routePerfil} ou Cursos
          <br /> (temos que mudar o nome da
          <br /> rota também para fazer mais sentido)
        </h1>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}

export default connect(Perfil);
