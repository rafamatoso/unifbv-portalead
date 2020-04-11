import {auth} from './firebase';

export const signIn = (state, history) => {
auth
  .signInWithEmailAndPassword(state.email, state.password)
  .then((response) => {
    history.push('/dashboard/perfil');
  })
  .catch((err) => {
    console.log(err);
  });}

  export const signUp = () => {}

  