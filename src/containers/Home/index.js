import React from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';

function Home() {
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
