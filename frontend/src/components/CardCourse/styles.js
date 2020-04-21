import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    maxHeight: 305,
  },
  spaceImage: {
    padding: theme.spacing(0),
  },
  sizeImage: {
    height: 140,
  },
  sizeContent: {
    padding: 4,
    minHeight: 100,
    maxHeight: 100,
    "& .title": {
      height: 32,
    },
    "& .description": {
      height: 68,
    },
    "& *": {
      textOverflow: "ellipsis",
    },
  },
  positionButtons: {
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1, 0, 1),
    "& .child": { padding: theme.spacing(1) },
  },
}));
