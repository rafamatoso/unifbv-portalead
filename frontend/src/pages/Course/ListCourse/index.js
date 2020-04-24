import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { CardCourse } from "../../../components";
import { database } from "../../../services/firebase/config";
import { useStyles } from "./styles";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);

  
    const history = useHistory();

    function handleClick() {
      history.push("/dashboard/addCourse");
    }

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

      <div>
        <Grid container className={classes.root}>

          {courses.map((item) => (
            <CardCourse className={classes.position} key={item.id} data={item} />
          ))}
        </Grid>

        <Button variant="contained" color="primary" onClick={handleClick} className={classes.addCourse}>
          Adicionar curso
      </Button>
      </div>
    );
  }