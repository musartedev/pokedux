import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons } from '../../actions';

import './styles.css';
function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemons(res.results));
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
