import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import {
  TextField,
  Button,
  FormHelperText,
  Grid,
  Paper,
} from '@material-ui/core';
import { ModalUpload } from './ModalUpload';
import { CloudUpload } from '@material-ui/icons';

import { useStyles } from './styles';

import { initialValues, validationSchema } from './helper';
import { storage } from '../../services/firebase/config';

export default function AddVideo() {
  const history = useHistory();
  const classes = useStyles();

  const [upload, setUpload] = useState({ progress: 0, show: false });

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      const task = storage.ref(`videos/${values.file.name}`).put(values.file);

      setUpload((values) => ({
        ...values,
        show: true,
      }));

      task.on(
        'state_changed',
        function progress(snapshot) {
          setUpload((values) => ({
            ...values,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          }));
        },
        function error(errors) {
          console.log(errors);
        },
        function complete() {
          setUpload((values) => ({
            ...values,
            show: false,
          }));
          history.push('/dashboard/perfil');
        }
      );
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
            className={classes.form}>
            <TextField
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              fullWidth>
              {formik.values.file ? formik.values.file.name : 'Upload Video'}
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
                className={classes.submit}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit">
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
