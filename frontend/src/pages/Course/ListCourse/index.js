import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import { CardCourse } from "../../../components";

import { database } from "../../../services/firebase/config";

import { useStyles } from "./styles";

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const unsubcribe = database.collection("courses").onSnapshot((query) => {
      let docs = [];
      query.forEach((course) => {
        docs.push({ id: course.id, ...course.data() });
      });
      setCourses(docs);
    });
    return unsubcribe;
  }, []);

  return (
    <Grid container className={classes.root}>
      {courses.map((item) => (
        <CardCourse className={classes.position} key={item.id} data={item} />
      ))}
    </Grid>
  );
}
