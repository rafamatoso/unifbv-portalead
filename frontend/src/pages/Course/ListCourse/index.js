import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Grid, Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.addCourse}
      >
        <FormattedMessage id="buttonAddCourse" />
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
