import axiosInstace from "./config";

export const getPokemons = (limit = 151) =>
  axiosInstace.get(`/pokemon?limit=${limit}`);
