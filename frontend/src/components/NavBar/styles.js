import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../../utils/colors";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    "&:hover": {
      color: colors.yellow1,
    },
  },
  appBar: {
    backgroundColor: colors.blue1,
  },
  title: {
    flexGrow: 1,
  },
  containerIcon: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
    margin: "4px 1rem 0 3rem",
  },
  iconButton: {
    fontSize: "1.03rem",
    "&:hover": {
      color: colors.yellow1,
    },
  },
  circularButton: {
    "&:hover": {
      color: colors.yellow1,
    },
  },
  containerMenuItem: {
    display: "flex",
    height: "30px",
    alignItems: "center",
    marginLeft: "10px",
  },
}));
