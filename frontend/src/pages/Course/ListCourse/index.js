import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import { CardCourse } from "../../../components";

import Course from "../../../services/firebase/Models/Course";

import { useStyles } from "./styles";

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    Course.list((value) => setCourses(value));
  }, []);

  return (
    <Grid container className={classes.root}>
      {courses.map((item) => (
        <CardCourse className={classes.position} key={item.id} data={item} />
      ))}
    </Grid>
  );
}
