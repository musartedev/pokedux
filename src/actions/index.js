import { CLEAR_ERROR, SET_ERROR, SET_POKEMON } from "./type";

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload
});
