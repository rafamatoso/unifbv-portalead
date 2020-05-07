import { makeStyles } from "@material-ui/core/styles";
import { imageBg } from "../../assets/img/index";
import { colors } from "../../utils/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight:"70vh",
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${imageBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  },
  paper: {
    marginTop: 0,
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(4),
    color: colors.blue1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: colors.yellow1,
  },
}));
