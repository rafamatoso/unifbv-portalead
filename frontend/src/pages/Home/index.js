import React, { useState } from "react";
import { connect } from "../../store";

import {
  Grid,
  Paper,
  Link,
  Box,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Copyright } from "../../components/Copyritgh";

import Login from "./Login";
import Register from "./Register";

import { useStyles } from "./styles";

import {
  dontHaveAnAccountText,
  createOneHereText,
  alreadyHaveAAccount,
} from "../../utils/strings";

function Home({ store }) {
  const classes = useStyles();
  const [showRegister, setShowRegister] = useState(false);
  const { loading } = store;

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      <Grid container component='main' className={classes.root}>
        <Grid item sm={"auto"} md={6} className={classes.image} />
        <Grid item sm={12} md={6} component={Paper} elevation={6} square>
          {!showRegister ? (
            <>
              <Login></Login>
              <div className={classes.link}>
                <Grid item>
                  <Link variant='body2' onClick={handleShowRegister}>
                    {`${dontHaveAnAccountText} ${createOneHereText}`}
                  </Link>
                </Grid>
              </div>
            </>
          ) : (
            <>
              <Register></Register>
              <div className={classes.link}>
                <Grid item>
                  <Link variant='body2' onClick={handleShowRegister}>
                    {alreadyHaveAAccount}
                  </Link>
                </Grid>
              </div>
            </>
          )}
          <div className={classes.paper}>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default connect(Home);
