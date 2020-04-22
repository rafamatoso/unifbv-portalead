import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import { useParams } from "react-router-dom";
import { Course, Video } from "../../../Models";

import { useStyles } from "./styles";

export default function ListVideo() {
  const { id: idCourse } = useParams();

  const classes = useStyles();
  const [course, setCourse] = useState({});

  useEffect(() => {
    async function getFirebase() {
      const course = await Course.listUnique(idCourse);
      delete course.videos;
      setCourse((state) => ({ ...state, ...course }));
      Video.list(idCourse, (docs) =>
        setCourse((state) => ({ ...state, videos: docs }))
      );
    }
    getFirebase();
  }, [idCourse]);

  return (
    <Grid container className={classes.root}>
      {console.log(course)}
    </Grid>
  );
}
