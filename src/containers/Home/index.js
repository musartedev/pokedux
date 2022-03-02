import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { getPokemons } from "../../api/getPokemons";
import { setError, setPokemons } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Home({}) {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      const pokemonList = res.data.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)))
        .then((pokemonResponse) => {
          console.log(pokemonResponse);
          const pokemonData = pokemonResponse.map((response) => response.data);
          console.log(pokemonData);
          dispatch(setPokemons(pokemonData));
        })
        .catch((error) => {
          dispatch(setError("Ocurrio un error"));
        });
    });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
