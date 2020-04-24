import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "92vh",
    backgroundColor: colors.gray2,
    justifyContent: "center",
  },
  content: {
    justifyContent: "space-around",
  },
  button: { justifyContent: "flex-end" },
  position: {
    marginTop: theme.spacing(3),
  },
  addCourse: {
    margin: theme.spacing(1, 2),
    backgroundColor: colors.blue1,
  },
}));
