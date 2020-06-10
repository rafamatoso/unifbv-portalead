import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Modal, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { CardCourse } from '../../../components';
import Course from '../../../services/firebase/Models/Course';
import { setLoading } from '../../../store/ducks/layout';
import AddCourse from '../AddCourse';
import { useStyles } from './styles';

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
    Course.list((value) => setCourses(value));
  }, [dispatch]);

  function handleClick() {
    setOpen((state) => !state);
  }
  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={handleClick}
        className={classes.FABaddCourse}
      >
        <AddIcon />
      </Fab>
      <Grid container className={classes.content}>
        {courses.map((item) => (
          <CardCourse className={classes.position} key={item.id} data={item} />
        ))}
      </Grid>

      <Modal open={open} onClose={handleClick}>
        <AddCourse onClose={handleClick} />
      </Modal>
    </div>
  );
}
