import { auth } from './config';
import { types } from '../../store/types';

export const signIn = (state, dispatch, history) => {
  auth
    .signInWithEmailAndPassword(state.email, state.password)
    .then((response) => {
      dispatch({ type: types.SET_USER, payload: response.user });
      history.push('/dashboard/perfil');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUp = () => {};
