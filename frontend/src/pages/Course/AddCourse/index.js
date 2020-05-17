/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

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
import { showMessage } from '../../../store/ducks/layout';
import { useStyles } from './styles';

function AddCourse({ onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intl = useIntl();
  const courseTitlePH = intl.formatMessage({
    id: 'courseTitlePH',
  });
  const courseDescriptionPH = intl.formatMessage({ id: 'courseDescriptionPH' });

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
      dispatch(
        showMessage({
          message: `Curso ${values.title} cadastrado.`,
          time: 2500,
        }),
      );
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
                  <label>
                    <FormattedMessage id="courseTitle" />
                  </label>
                  <Input
                    autoComplete="cTitle"
                    name="title"
                    variant="outlined"
                    placeholder={courseTitlePH}
                    required
                    fullWidth
                    id="courseTitle"
                    label="Titulo do Curso"
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.courseTitle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>
                    <FormattedMessage id="courseVisibility" />
                  </label>
                  <Select
                    name="show"
                    defaultValue=""
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem value="false" onChange={formik.handleChange}>
                      <FormattedMessage id="privateCourse" />
                    </MenuItem>
                    <MenuItem value="true" onChange={formik.handleChange}>
                      <FormattedMessage id="openCourse" />
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
                  <label>
                    <FormattedMessage id="courseDescription" />
                  </label>

                  <TextField
                    name="description"
                    multiline="true"
                    placeholder={courseDescriptionPH}
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
                    <FormattedMessage id="cancelButtonText" />
                  </Button>
                  <span> &nbsp; </span>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    <FormattedMessage id="saveButtonText" />
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
