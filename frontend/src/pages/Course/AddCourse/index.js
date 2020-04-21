import React from "react";
import { connect } from "../../../store";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  SvgIcon,
  Input,
  CardContent,
  IconButton,
  Container,
  Select,
  MenuItem,
  Card,
} from "@material-ui/core";
import { Copyright } from "../../../components/Copyritgh";

import { useStyles } from "./styles";

function AddCourse() {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='100%'>
      <CssBaseline />
      <div className={classes.paper}>
        <form margin='5' className={classes.form} noValidate>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <label>Titulo do Curso:</label>
                  <Input
                    autoComplete='cTitle'
                    name='courseTitle'
                    variant='outlined'
                    required
                    fullWidth
                    placeholder='Titulo do Curso'
                    id='courseTitle'
                    label='Titulo do Curso'
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>Visibilidade:</label>
                  <Select defaultValue={1} fullWidth>
                    <MenuItem value={1}>Privado</MenuItem>
                    <MenuItem value={2}>Aberto</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} alignItems='center' justify='center'>
                  <Card variant='outlined' fullWidth>
                    <CardContent>
                      <Box display='flex' justifyContent='center'>
                        <IconButton size='medium'>
                          <SvgIcon>
                            <path
                              fill='currentColor'
                              d='M3 4V1H5V4H8V6H5V9H3V6H0V4M6 10V7H9V4H16L17.8 6H21C22.1 6 23 6.9 23 8V20C23 21.1 22.1 22 21 22H5C3.9 22 3 21.1 3 20V10M13 19C17.45 19 19.69 13.62 16.54 10.46C13.39 7.31 8 9.55 8 14C8 16.76 10.24 19 13 19M9.8 14C9.8 16.85 13.25 18.28 15.26 16.26C17.28 14.25 15.85 10.8 13 10.8C11.24 10.8 9.8 12.24 9.8 14Z'
                            />
                          </SvgIcon>
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <label>Descrição do Curso:</label>
                  <TextField
                    placeholder='Descrição...'
                    size='large'
                    maxWidth
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box display='flex' alignContent='center' margin='1' width='60%'>
            <Button
              type='cancel'
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
              spacing='auto'>
              Cancel
            </Button>
            <span> &nbsp; </span>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Submit
            </Button>
          </Box>
          <Grid container justify='flex-end'></Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(AddCourse);