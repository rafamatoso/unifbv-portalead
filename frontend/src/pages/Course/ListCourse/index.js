import React, { useState, useEffect } from "react";
import { Grid,Modal } from "@material-ui/core";
import { CardCourse } from "../../../components";
import AddCourse from "../AddCourse"
import Course from "../../../services/firebase/Models/Course";

import { useStyles } from "./styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  function handleClick() {
    setOpen( state=> !state )
  }
  useEffect(() => {
    Course.list((value) => setCourses(value));
  }, []);

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.addCourse}
      >
        Adicionar curso
      </Button>
      <Grid container className={classes.content}>
        {courses.map((item) => (
          <CardCourse className={classes.position} key={item.id} data={item} />
        ))}
      </Grid>

      <Modal 
      open={open}
      onClose={handleClick}
      >
        
        <AddCourse onClose={handleClick} />
        
      </Modal>
    </div>
  );
}
