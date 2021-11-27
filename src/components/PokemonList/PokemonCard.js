import React from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = () => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Icon name='favorite' color={FAV_COLOR} />
        <Image
          centered
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        />
        <h2 className='PokemonCard-title'>Ditto</h2>
        <Divider />
        <Label color={MAIN_COLOR}>
          normal
        </Label>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
