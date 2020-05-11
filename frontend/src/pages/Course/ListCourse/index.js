import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { CardCourse } from '../../../components';
import Course from '../../../services/firebase/Models/Course';
import { setLoading } from '../../../store/ducks/layout';
import { useStyles } from './styles';

export default function ListCourse() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    history.push('/dashboard/addCourse');
  }
  useEffect(() => {
    dispatch(setLoading(false));
    Course.list((value) => setCourses(value));
  }, [dispatch]);

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
    </div>
  );
}
