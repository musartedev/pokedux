/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons, setError } from '../../actions';
import './styles.css';

function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonResponses) => {
        const pokemonsWithDetails = pokemonResponses.map(
          (response) => response.data
        );
        dispatch(setPokemons(pokemonsWithDetails));
      })
      .catch((error) => {
        dispatch(setError({ message: 'Ocurrió un error', error }));
      });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
