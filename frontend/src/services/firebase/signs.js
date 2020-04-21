import { auth } from "./config";
import { types } from "../../store/types";

export const signIn = ({ email, password }, dispatch, history) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({ type: types.SET_USER, payload: response.user });
      history.push("/dashboard/courses");
      dispatch({ type: types.SET_LOADING, payload: false });
    })
    .catch((err) => {
      dispatch({ type: types.SET_LOADING, payload: false });
      console.log(err);
    });
};

export const signUp = ({ email, password }, dispatch) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {})
    .catch((err) => {
      dispatch({ type: types.SET_LOADING, payload: false });
      console.log(err);
    });
};

export const signOut = (dispatch, history) => {
  auth
    .signOut()
    .then((response) => {
      dispatch({ type: types.SET_LOGOUT });
      history.push("/home");
    })
    .catch((err) => {});
};
