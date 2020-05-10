import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    maxHeight: 380,
  },
  spaceImage: {
    padding: theme.spacing(0),
  },
  sizeImage: {
    height: 200,
  },
  sizeContent: {
    padding: 10,
    minHeight: 100,
    maxHeight: 160,
    "& .title": {
      height: 32,
      fontWeight: "bold",
    },
    "& .description": {
      height: 70,
    },
    "& *": {
      textOverflow: "ellipsis",
    },
  },
  positionButtons: {
    justifyContent: "flex-end",
    padding: theme.spacing(1, 1, 0, 1),
    "& .child": { padding: theme.spacing(1) },
  },
}));
