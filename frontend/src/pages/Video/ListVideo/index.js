import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";

import { useParams } from "react-router-dom";
import { Course, Video } from "../../../services/firebase/Models";

import { useStyles } from "./styles";
import {
  Add,
  PlayCircleFilled,
  EditOutlined,
  DeleteOutline,
} from "@material-ui/icons";

export default function ListVideo() {
  const { id: idCourse } = useParams();

  const classes = useStyles();
  const [course, setCourse] = useState({});

  useEffect(() => {
    async function getFirebase() {
      const courseUniq = await Course.listUnique(idCourse);

      setCourse((state) => ({ ...state, ...courseUniq }));
      Video.list(idCourse, (docs) =>
        setCourse((state) => ({ ...state, videos: docs }))
      );
    }
    getFirebase();
  }, [idCourse]);

  return (
    <Grid container className={classes.root}>
      <Paper
        elevation={6}
        style={{
          display: "flex",
          alignItems: "center",
          maxHeight: 200,
          width: "90vw",
          margin: "10px",
          padding: "20px",
        }}
      >
        <img src={course.img} height="80%" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignSelf: "start",
            margin: "0 30px",
          }}
        >
          <Typography
            className="title"
            gutterBottom
            variant="h4"
            component="h3"
          >
            {course.title}
          </Typography>
          <Typography
            className="description"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {course.description}
          </Typography>
        </div>
        <div style={{ alignSelf: "flex-start" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            width="30%"
            startIcon={<Add />}
          >
            Adicionar Aula
          </Button>
        </div>
      </Paper>

      {console.log(course)}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem style={{ flexDirection: "column" }}>
              <ListItemAvatar>
                <Avatar variant="square" src={course.img} />
              </ListItemAvatar>
              <ListItemText
                primary={course.title}
                secondary={course.description}
              />
            </ListItem>
            <Divider />
            {course.videos?.map((item) => (
              <ListItem button>
                <ListItemIcon>
                  <PlayCircleFilled />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      {/* {course.videos?.map((item) => (
        <Paper
          elevation={6}
          style={{
            display: "flex",
            alignItems: "center",
            maxHeight: 100,
            width: "90vw",
            margin: "10px",
            padding: "20px",
          }}
        >
          <PlayCircleFilled color="primary" />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignSelf: "start",
              margin: "0 30px",
            }}
          >
            <Typography
              className="title"
              gutterBottom
              variant="h4"
              component="h3"
            >
              {item.title}
            </Typography>
            <Typography
              className="description"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </Typography>
          </div>
          <EditOutlined color="primary" />
          <DeleteOutline color="primary" />
        </Paper>
      ))} */}
    </Grid>
  );
}
