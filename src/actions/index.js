import { getPokemonsWithDetails } from '../api/getPokemons';
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, SET_FAVORITE } from './types';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
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

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const fetchPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    try {
      const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
      dispatch(setPokemons(pokemonsWithDetails));
    } catch (error) {
      dispatch(setError({ message: 'Oops! Something went wrong.', error }));
    }
  };
