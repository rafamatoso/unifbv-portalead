import { auth } from "..";
import { set, get, clear } from "../../storage";

class Auth {
  signIn({ email, password }) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          set(res.user.toJSON());
          resolve();
        })
        .catch(reject());
    });
  }

  observerUser(observer) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        observer(user.toJSON());
        set(user.toJSON());
      } else {
        observer(user);
        clear();
      }
    });
  }

  getUser() {
    return get();
  }

  signUp({ email, password }) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return auth.signOut().finally(() => clear());
  }
}

export default new Auth();
