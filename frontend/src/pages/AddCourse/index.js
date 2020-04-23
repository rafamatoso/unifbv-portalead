import React, { useState } from "react";
import { connect } from "../../store";
import { storage } from "../../services/firebase/config";
import { database } from "../../services/firebase/config";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
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
} from "@material-ui/core";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

import { Copyright } from "../../components/Copyritgh";

import { useStyles } from "./styles";

function AddCourse(initialValues, onSubmit) {
  const classes = useStyles();
  //const history = useHistory();
  const [upload, setUpload] = useState({ progress: 0, show: false });

  const formik = useFormik({
    initialValues: {
      items: {
        courseTitle: "",
        coursePrivacy: "",

        courseDescription: "",
      },

      file: null,
    },
    onSubmit: (values) => {
      const taskStorage = storage
        .ref(`courses/covers/${values.file.name}`)
        .put(values.file);

      setUpload((values) => ({
        ...values,
        show: true,
      }));

      taskStorage.on(
        "state_changed",
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
        }
      );
      const taskDatabase = database
        .collection("courses")
        .doc(values.items.courseTitle)
        .set(values.items)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },

    //validationSchema,
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
                    name="items.courseTitle"
                    variant="outlined"
                    required
                    fullWidth
                    placeholder="Titulo do Curso"
                    id="courseTitle"
                    label="Titulo do Curso"
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.items.courseTitle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>Visibilidade:</label>
                  <Select
                    name="items.coursePrivacy"
                    defaultValue={""}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem value={"1"} onChange={formik.handleChange}>
                      Privado
                    </MenuItem>
                    <MenuItem value={"2"} onChange={formik.handleChange}>
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
                          style={{ display: "none" }}
                          name="file"
                          onChange={(e) =>
                            formik.setFieldValue(
                              e.target.name,
                              e.target.files[0]
                            )
                          }
                          onClick={(e) =>
                            formik.setFieldTouched(e.target.name, true)
                          }
                        />
                        <Button
                          variant="contained"
                          //color="primary"
                          component="label"
                          htmlFor="button-file"
                          className={classes.upload}
                          size="large"
                        >
                          {formik.values.courseImage
                            ? formik.values.courseImage.name
                            : formik.values.courseImage}
                          <AddAPhotoIcon />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <label>Descrição do Curso:</label>

                  <TextField
                    name="items.courseDescription"
                    placeholder="Descrição..."
                    multiline="true"
                    rows="5"
                    size="large"
                    maxWidth
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.items.courseDescription}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box display="flex" alignContent="center" margin="1" width="60%">
            <Button
              type="reset"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              spacing="auto"
            >
              Cancel
            </Button>
            <span> &nbsp; </span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </Box>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(AddCourse);
