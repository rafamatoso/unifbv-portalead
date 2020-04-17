import { auth } from './config';
import { types } from '../../store/types';


export const signIn = ({ email, password }, dispatch, history) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.SET_USER, payload: response.user });
      history.push('/dashboard/perfil');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUp = ({ email, password }) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signOut = (dispatch, history) => {
    auth
    .signOut()
    .then((response) => {
      console.log(response);
      dispatch({ type: types.SET_LOGOUT });
      history.push('/home');
    })
    .catch((err) => {
      console.log(err);
    });
}