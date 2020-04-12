import { keys } from './storageKeys';

export function get() {
  try {
    return JSON.parse(sessionStorage.getItem(keys.GLOBAL_STORE));
  } catch (err) {
    return undefined;
  }
}

export const set = (value) =>
  sessionStorage.setItem(keys.GLOBAL_STORE, JSON.stringify(value));

export const clear = () => sessionStorage.setItem(keys.GLOBAL_STORE, null);
