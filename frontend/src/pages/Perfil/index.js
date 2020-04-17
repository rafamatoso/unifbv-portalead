import React from "react";
import { useHistory } from "react-router-dom";

import { Box, Container } from "@material-ui/core";
import { CustomButton } from "../../components/CustomButton";
import { Copyright } from "../../components/Copyritgh";

import { signOut } from '../../services/firebase';

import { connect } from "../../store";

import { routePerfil, signOutButtonText } from '../../utils/strings';

import { useStyles } from "./styles";

function Perfil({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signOut(dispatch, history);
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <div className={classes.paper}>
        <h1>{routePerfil}</h1>
        <CustomButton onClick={handleSubmit} className={classes.button}>
          {signOutButtonText}
        </CustomButton>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}

export default connect(Perfil);
