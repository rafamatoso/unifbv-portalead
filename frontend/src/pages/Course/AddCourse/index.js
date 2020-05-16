/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

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
import { useFormik } from 'formik';

import { Copyright } from '../../../components/Copyright';
import { Course } from '../../../services/firebase/Models';
import * as i18n from '../../../utils/i18n_PTBR';
import { useStyles } from './styles';

function AddCourse({ onClose }) {
  const classes = useStyles();

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
      onClose();
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
                  <label>{i18n.courseTitle}</label>
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
                  <label>{i18n.courseVisibility}</label>
                  <Select
                    name="show"
                    defaultValue=""
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem value="false" onChange={formik.handleChange}>
                      {i18n.privateCourse}
                    </MenuItem>
                    <MenuItem value="true" onChange={formik.handleChange}>
                      {i18n.openCourse}
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
                  <label>{i18n.courseDescription}</label>

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
              <div margin-top="0" className={classes.buttons}>
                <Box display="flex" alignContent="center" width="60%">
                  <Button
                    type="reset"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={onClose}
                    spacing="auto"
                  >
                    {i18n.cancelButtonText}
                  </Button>
                  <span> &nbsp; </span>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {i18n.saveButtonButtonText}
                  </Button>
                </Box>
              </div>
            </CardContent>
          </Card>

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
