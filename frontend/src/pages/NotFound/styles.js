import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  notfoundstyle: {
    marginTop: 250,
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
