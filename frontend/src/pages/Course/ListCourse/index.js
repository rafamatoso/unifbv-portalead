import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardCourse } from '../../../components';

import Course from '../../../services/firebase/Models/Course';

import { useStyles } from './styles';
import { setLoading } from '../../../Store/ducks/layout';

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
