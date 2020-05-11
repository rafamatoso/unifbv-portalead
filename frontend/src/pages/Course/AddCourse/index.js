/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Input,
  CardContent,
  Container,
  Select,
  MenuItem,
  Card,
} from '@material-ui/core';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import { useHistory } from 'react-router-dom';
import { Copyright } from '../../../components/Copyright';

import { useStyles } from './styles';

import { Course } from '../../../services/firebase/Models';

function AddCourse() {
  const classes = useStyles();

  const history = useHistory();

  function handleClick() {
    history.push('/dashboard/courses');
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      img: null,
      show: '',
      description: '',
      videos: [],
    },

    onSubmit: async (values) => {
      await Course.create(values);
      handleClick();
    },
  });

  return (
    <Container component="main" maxWidth="100%">
      <CssBaseline />
      <div className={classes.paper}>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <label>Titulo do Curso:</label>
                  <Input
                    autoComplete="cTitle"
                    name="title"
                    variant="outlined"
                    required
                    fullWidth
                    placeholder="Titulo do Curso"
                    id="courseTitle"
                    label="Titulo do Curso"
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.courseTitle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>Visibilidade:</label>
                  <Select
                    name="show"
                    defaultValue=""
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem value="false" onChange={formik.handleChange}>
                      Privado
                    </MenuItem>
                    <MenuItem value="true" onChange={formik.handleChange}>
                      Aberto
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} alignItems="center" justify="center">
                  <Card variant="outlined" fullWidth>
                    <CardContent>
                      <Box display="flex" justifyContent="center">
                        <input
                          id="button-file"
                          accept="image/*"
                          type="file"
                          style={{ display: 'none' }}
                          name="img"
                          onChange={(e) => {
                            formik.setFieldValue(
                              e.target.name,
                              e.target.files[0],
                            );
                          }}
                          onClick={(e) => {
                            formik.setFieldTouched(e.target.name, true);
                          }}
                        />
                        <Button
                          variant="contained"
                          // color="primary"
                          component="label"
                          htmlFor="button-file"
                          className={classes.upload}
                          size="large"
                        >
                          {formik.values.img
                            ? formik.values.img.name
                            : formik.values.file}
                          <AddAPhotoIcon />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <label>Descrição do Curso:</label>

                  <TextField
                    name="description"
                    placeholder="Descrição..."
                    multiline="true"
                    rows="5"
                    size="large"
                    maxWidth
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div margin-top="0" className={classes.buttons}>
            <Box display="flex" alignContent="center" width="60%">
              <Button
                type="reset"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={handleClick}
                spacing="auto"
              >
                Cancelar
              </Button>
              <span> &nbsp; </span>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Salvar
              </Button>
            </Box>
          </div>
          <Grid container justify="flex-end" />
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AddCourse;
