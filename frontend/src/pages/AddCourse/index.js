import React from "react";
import { connect } from "../../store";
import { storage } from "../../services/firebase/config";
import { useFormik } from "formik";

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
import { set } from "../../services/storage";

function AddCourse(initialValues, onSubmit) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      courseTitle: "",
      coursePrivacy: "",
      courseImage: "",
      courseDescription: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                    name="courseTitle"
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
                    name="coursePrivacy"
                    defaultValue={""}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem
                      value={"1"}
                      onChange={formik.handleChange.coursePrivacy}
                    >
                      Privado
                    </MenuItem>
                    <MenuItem
                      value={"2"}
                      onChange={formik.handleChange.coursePrivacy}
                    >
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
                          name="courseImage"
                          onChange={(e) =>
                            formik.setFieldValue(
                              e.target.name,
                              e.target.files[0]
                            )
                          }
                          onClick={(e) =>
                            formik.setFieldTouched(e.target.courseImage, true)
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
                          {/* {formik.values.courseImage ? formik.values.courseImage.name : formik.values.courseTitle} */}
                          <AddAPhotoIcon />
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <label>Descrição do Curso:</label>
                  
                  <TextField 
                    name="courseDescription"
                    placeholder="Descrição..."
                    multiline="true"
                    rows="5"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                    size="large"
                    maxWidth
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.courseDescription}
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
