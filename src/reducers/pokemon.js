import {
  SET_POKEMONS,
  SET_FAVORITE,
} from '../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(['list'], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state
        .get('list')
        .findIndex((elem) => elem.get('id') === action.payload.pokemonId);

      const isFavorite = state
        .get('list')
        .get(currentPokemonIndex)
        .get('favorite');

      return state.setIn(
        ['list', currentPokemonIndex, 'favorite'],
        !isFavorite
      );
    default:
      return state;
  }
};
