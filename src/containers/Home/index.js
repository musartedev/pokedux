import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonCard from '../../components/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';

function Home() {
  useEffect(() => {
    getPokemons().then((res) => {
      console.log('🚀 ~ file: index.js ~ line 10 ~ getPokemons ~ res', res);
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonCard />
    </div>
  );
}

export default Home;
