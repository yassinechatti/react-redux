import { ADD, DELETE, DONE, EDIT } from "./ActionTypes";

export const dlt = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const edit = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
export const done = (payload) => {
  return {
    type: DONE,
    payload,
  };
};
