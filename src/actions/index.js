import {
  SET_POKEMONS,
  SET_ERROR,
  CLEAR_ERROR,
  FETCH_POKEMON_DETAIL,
} from './types';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const fetchPokemonDetails = (payload) => ({
  type: FETCH_POKEMON_DETAIL,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});
