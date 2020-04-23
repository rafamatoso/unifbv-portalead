import { keys } from "./storageKeys";

export function get() {
  return JSON.parse(localStorage.getItem(keys.GLOBAL_STORE));
}

export const set = (value) =>
  localStorage.setItem(keys.GLOBAL_STORE, JSON.stringify(value));

export const clear = () => localStorage.setItem(keys.GLOBAL_STORE, null);
