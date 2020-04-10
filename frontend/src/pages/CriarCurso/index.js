import React from "react";

import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../CriarCurso/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import { Input } from "@material-ui/core";
import {Copyright} from '../../components/MaterialUi/Copyritgh';
function handleSubmit() {
  //history.push('/createcourse');
}

export function CriarCurso() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <label>Titulo do Curso:</label>
              <Input
                autoComplete="cTitle"
                name="courseTitle"
                variant="outlined"
                required
                fullWidth
                placeholder="Titulo do Curso"
                id="courseTitle"
                label="Titulo do Curso"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <label>Visibilidade:</label>
              <Select
               defaultValue={1}
               fullWidth
               >
                  
                <MenuItem value={1}>Privado</MenuItem>
                <MenuItem value={2}>Aberto</MenuItem>
              </Select>
            </Grid>
            {/* <Grid item xs={12}>
              <Card
              //Upload imagem do curso
                variant="outlined" 
              fullWidth>
                
              </Card>
            </Grid> */}
            <Grid item xs={12}>
                <Card >
              <TextField
              placeholder="Descrição..."
              size="large"
              maxWidth
              fullWidth
              />
              </Card>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
