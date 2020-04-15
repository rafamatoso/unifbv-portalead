import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Badge,
} from "@material-ui/core";
// import { Container } from './styles';

export default function CardCourse({ data }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 250,
        maxHeight: 300,
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 20,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          src={data.img}
          loading="lazy"
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
