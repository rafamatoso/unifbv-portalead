import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../../utils/colors";
import { FullscreenExit } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "92vh",
    backgroundColor: colors.gray2,
    justifyContent: "space-around",
  },
  button: { justifyContent: "flex-end" },
  position: {
    marginTop: theme.spacing(3),
  },
  addCourse: {
    backgroundColor: colors.blue1,
  }
}));
