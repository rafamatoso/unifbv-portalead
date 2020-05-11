import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import {
  TextField,
  Button,
  FormHelperText,
  Grid,
  Paper,
} from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { ModalUpload } from './ModalUpload';

import { useStyles } from './styles';

import { initialValues, validationSchema } from './helper';
import Video from '../../../services/firebase/Models/Video';

function AddVideo() {
  const { id, idVideo } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState(null);

  useEffect(() => {
    async function get() {
      if (idVideo) {
        setState(await Video.listUnique(idVideo));
      }
    }
    get();
  }, [idVideo]);
  const [upload, setUpload] = useState({ progress: 0, show: false });

  function handlerProgress(snapshot) {
    setUpload((values) => ({
      ...values,
      progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    }));
  }

  function handlerComplete() {
    setUpload((values) => ({
      ...values,
      show: false,
    }));
    history.push(`/dashboard/courses/${id}/listVideo`);
  }

  const formik = useFormik({
    initialValues: state || initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      setUpload((values) => ({
        ...values,
        show: true,
      }));

      if (idVideo) {
        Video.update(
          idVideo,
          { idCourse: id, ...values },
          handlerProgress,
          null,
          handlerComplete,
        );
      } else {
        Video.create(
          { idCourse: id, ...values },
          handlerProgress,
          null,
          handlerComplete,
        );
      }
    },
    validationSchema,
  });

  return (
    <Grid container className={classes.root}>
      <ModalUpload show={upload.show} value={upload.progress} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            className={classes.form}
          >
            <TextField
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              label="Titulo"
              variant="outlined"
              fullWidth
              error={formik.errors.title && formik.touched.title}
              helperText={
                formik.errors.title && formik.touched.title
                  ? formik.errors.title
                  : null
              }
            />
            <TextField
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              label="Descrição"
              multiline
              variant="outlined"
              fullWidth
              error={formik.errors.description && formik.touched.description}
              helperText={
                formik.errors.description && formik.touched.description
                  ? formik.errors.description
                  : null
              }
            />

            <input
              id="button-file"
              accept="video/*"
              type="file"
              style={{ display: 'none' }}
              name="file"
              onChange={(e) =>
                formik.setFieldValue(e.target.name, e.target.files[0])
              }
              onClick={(e) => formik.setFieldTouched(e.target.name, true)}
            />
            <Button
              variant="contained"
              color="primary"
              component="label"
              htmlFor="button-file"
              className={classes.upload}
              size="large"
              fullWidth
            >
              {typeof formik.values.file !== 'string' &&
              formik.values.file !== null
                ? formik.values.file.name
                : 'Upload Video'}
              <CloudUpload />
            </Button>
            <FormHelperText error={formik.errors.file && formik.touched.file}>
              {formik.errors.file && formik.touched.file
                ? formik.errors.file
                : null}
            </FormHelperText>

            <div className={classes.formButton}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default AddVideo;
