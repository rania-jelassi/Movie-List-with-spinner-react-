import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../constants/action-types";

export const addMovie = payload => ({
  type: ADD_MOVIE,
  payload
});
export const deleteMovie = payload => ({
  type: DELETE_MOVIE,
  payload
});
export const editMovie = payload => ({
  type: EDIT_MOVIE,
  payload
});
