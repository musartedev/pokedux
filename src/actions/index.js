import axios from 'axios';
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from './types';

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

export const setPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    try {
      const pokemonsWithDetails = await Promise.all(
        pokemons.map(async (pokemon) => {
          const pokemonDetail = await axios.get(pokemon.url);
          return pokemonDetail.data;
        })
      );

      dispatch(setPokemons(pokemonsWithDetails));
    } catch (error) {
      dispatch(setError({ message: 'Oops! Something went wrong.', error }));
    }
  };
