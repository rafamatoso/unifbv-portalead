import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import Share from "@material-ui/icons/ShareTwoTone";
import { useStyles } from "./styles";
// import { Container } from './styles';

export default function CardCourse({ data, className }) {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} ${className}`}>
      <CardActionArea className={classes.spaceImage}>
        <CardMedia
          className={classes.sizeImage}
          component="img"
          alt={data.title}
          src={data.img}
          loading="lazy"
          title={data.title}
        />
        <CardContent className={classes.sizeContent}>
          <Typography
            className="title"
            gutterBottom
            variant="h6"
            component="h3"
          >
            {data.title}
          </Typography>
          <Typography
            className="description"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.positionButtons}>
        <IconButton
          className="child"
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
