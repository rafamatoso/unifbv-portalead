import { LinearProgress } from "@material-ui/core";
import { withStyles, lighten } from "@material-ui/core/styles";

export default withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#388e3c", 0.5),
  },
  bar: {
    backgroundColor: "#388e3c",
  },
})(LinearProgress);
