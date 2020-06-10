import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

import {
  Grid,
  Paper,
  Typography,
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
  Modal,
  Fab,
} from '@material-ui/core';
import {
  Add,
  PlayCircleFilled,
  EditOutlined,
  DeleteOutline,
  MoreVert,
} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

import { Course, Video } from '../../../services/firebase/Models';
import AddVideo from '../AddVideo';
import { useStyles } from './styles';
import '../../../../node_modules/video-react/dist/video-react.css';

export default function ListVideo() {
  const { id: idCourse } = useParams();

  const classes = useStyles();
  const [course, setCourse] = useState({});
  const [video, setVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [openModal, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick() {
    setOpen((state) => !state);
  }

  function handlePopoverOpen(event, item = null) {
    setAnchorEl(event.currentTarget);
    setSelectedVideo(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
    setSelectedVideo(null);
  }

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
          <Fab
            size="small"
            color="primary"
            startIcon={<Add />}
            onClick={handleClick}
            className={classes.FABaddVideo}
          >
            <AddIcon />
          </Fab>

          <Modal open={openModal} onClose={handleClick}>
            <AddVideo
              data={selectedVideo}
              onClose={() => {
                handleClick();
                handlePopoverClose();
              }}
            />
          </Modal>
        </div>
      </Paper>
      {video ? (
        <div style={{ width: '90%', margin: '10px auto' }}>
          <Player src={video?.file}>
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
                    onClick={(e) => {
                      handlePopoverOpen(e, item);
                    }}
                  >
                    <MoreVert />
                  </IconButton>
                  <Menu
                    id="options"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handlePopoverClose}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <EditOutlined />
                      <FormattedMessage id="buttonEdit" />
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        Video.delete(item);
                        handlePopoverClose();
                      }}
                    >
                      <DeleteOutline />
                      <FormattedMessage id="buttonRemove" />
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
