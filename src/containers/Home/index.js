/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import Loader from '../../components/Loader';
import { fetchPokemonsWithDetails } from '../../actions';
import './styles.css';

function Home() {
  const pokemons = useSelector((state) =>
    state.getIn(['pokemon', 'list'])
  ).toJS();
  const loading = useSelector((state) => state.get('ui').get('loading'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
