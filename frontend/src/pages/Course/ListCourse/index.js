import React, { useState, useEffect } from 'react';
import { Grid, Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { CardCourse } from '../../../components';

import Course from '../../../services/firebase/Models/Course';

import { useStyles } from './styles';
import { setLoading } from '../../../Store/ducks/layout';
import AddCourse from '../AddCourse';

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

      <Modal open={open} onClose={handleClick}>
        <AddCourse onClose={handleClick} />
      </Modal>
    </div>
  );
}
