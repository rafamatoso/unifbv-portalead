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
    .catch(() => {
      dispatch({ type: types.SET_LOADING, payload: false });
    });
};

export const signUp = ({ email, password }, dispatch) => {
  auth.createUserWithEmailAndPassword(email, password).catch((err) => {
    dispatch({ type: types.SET_LOADING, payload: false });
  });
};

export const signOut = (dispatch, history) => {
  auth.signOut().then(() => {
    dispatch({ type: types.SET_LOGOUT });
    history.push("/home");
  });
};
