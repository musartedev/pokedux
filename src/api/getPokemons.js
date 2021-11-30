import axios from '../services/axios';

export const getPokemons = (limit = 151) =>
  axios
    .get(`/pokemdon?limit=${limit}`)
    .then((response) => response.data)
