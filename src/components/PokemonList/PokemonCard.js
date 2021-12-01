import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { setFavorite } from '../../actions';
import { FAV_COLOR, MAIN_COLOR, DEFAULT_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  };

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

  if (!pokemon) return null;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <button className='PokemonCard-favorite' onClick={handleFavorite}>
          <Icon name='favorite' color={color} />
        </button>
        <Image centered src={pokemon.sprites.front_default} />
        <h2 className='PokemonCard-title'>{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map(({ type }) => {
          return (
            <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.name}`}>
              {type.name}
            </Label>
          );
        })}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
