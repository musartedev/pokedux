import axios from "axios";

const URL = process.env.POKEAPI || "https://pokeapi.co/api/v2/";

const axiosInstace = axios.create({
  baseURL: URL
});

export default axiosInstace;
