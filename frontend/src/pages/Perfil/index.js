import React from "react";
import { useHistory } from "react-router-dom";

import { Box, Container } from "@material-ui/core";
import { CustomButton } from "../../components/CustomButton";
import { Copyright } from "../../components/Copyritgh";

import { connect, types } from "../../store";

import { routePerfil, backButtonText } from "../../utils/strings";
import { auth } from "../../services/firebase/config";

import { useStyles } from "./styles";

function Perfil({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();

  function exit() {
    dispatch({ type: types.SET_LOGOUT });
    history.push("/home");
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      
      <div className={classes.paper}>
        <h1>{routePerfil}</h1>
        <CustomButton onClick={exit} className={classes.button}>
          {backButtonText}
        </CustomButton>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}

export default connect(Perfil);
