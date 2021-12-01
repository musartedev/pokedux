import axios from '../services/axios';

export const getPokemons = (limit = 151) =>
  axios.get(`/pokemon?limit=${limit}`).then((response) => response.data);

export const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))).then(
    (pokemonResponses) => {
      return pokemonResponses.map((response) => response.data);
    }
  );
};
