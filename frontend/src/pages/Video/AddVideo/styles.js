import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    marginTop: theme.spacing(1),
    "& *": { marginTop: theme.spacing(1) },
  },
  upload: {
    "& *": { margin: theme.spacing(0, 1) },
  },
  formButton: {
    display: "flex",
    justifyContent: "space-around",
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));
