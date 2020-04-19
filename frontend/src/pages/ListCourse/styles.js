import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    backgroundColor: colors.gray2,
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
  },
  button: { justifyContent: "flex-end" },

  position: {
    marginTop: theme.spacing(3),
  },
}));
