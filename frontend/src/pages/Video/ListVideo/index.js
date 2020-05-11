import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  Divider,
  ListItemSecondaryAction,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import {
  Add,
  PlayCircleFilled,
  EditOutlined,
  DeleteOutline,
  MoreVert,
} from '@material-ui/icons';
import { Course, Video } from '../../../services/firebase/Models';

import { useStyles } from './styles';
import '../../../../node_modules/video-react/dist/video-react.css';

export default function ListVideo() {
  const { id: idCourse } = useParams();

  const classes = useStyles();
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    async function getFirebase() {
      const courseUniq = await Course.listUnique(idCourse);

      setCourse((state) => ({ ...state, ...courseUniq }));
      Video.list(idCourse, (docs) => {
        setCourse((state) => ({ ...state, videos: docs }));
        setVideo(docs[0]);
      });
    }
    getFirebase();
  }, [idCourse]);

  return (
    <Grid container className={classes.root}>
      <Paper
        elevation={6}
        style={{
          display: 'flex',
          alignItems: 'center',
          maxHeight: 100,
          width: '90vw',
          margin: '10px',
          padding: '20px',
        }}
      >
        <img src={course.img} alt={course.title} height="80%" />
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignSelf: 'start',
            margin: '0 30px',
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
        <div style={{ alignSelf: 'flex-start' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            width="30%"
            startIcon={<Add />}
            component={Link}
            to={`/dashboard/courses/${idCourse}/addVideo`}
          >
            Adicionar Aula
          </Button>
        </div>
      </Paper>
      {video ? (
        <div style={{ width: '90%', margin: '10px auto' }}>
          <Player
            // autoPlay={
            //   course.videos?.length ? video.id !== course.videos[0]?.id : true
            // }
            src={video?.file}
          >
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>
        </div>
      ) : null}

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
            <ListItem style={{ flexDirection: 'column' }}>
              <img src={course.img} alt={course.title} width={60} />

              <ListItemText
                primary={course.title}
                secondary={course.description}
              />
            </ListItem>
            <Divider />
            {course.videos?.map((item, i) => (
              <ListItem key={item.id} button onClick={() => setVideo(item)}>
                <ListItemIcon>
                  <PlayCircleFilled />
                </ListItemIcon>
                <ListItemText
                  primary={`${i + 1} - ${item.title}`}
                  secondary={item.description}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-controls="options"
                    aria-haspopup="true"
                    onClick={handlePopoverOpen}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="options"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handlePopoverClose}
                  >
                    <MenuItem
                      component={Link}
                      to={`/dashboard/courses/${idCourse}/addVideo/${item.id}`}
                    >
                      <EditOutlined />
                      Editar
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        Video.delete(item);
                        handlePopoverClose();
                      }}
                    >
                      <DeleteOutline />
                      Remover
                    </MenuItem>
                  </Menu>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Grid>
  );
}
