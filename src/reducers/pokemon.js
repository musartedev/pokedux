import {
  SET_POKEMONS,
  SET_ERROR,
  CLEAR_ERROR,
  SET_FAVORITE,
  TOGGLE_LOADER,
} from '../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
  loading: false,
  error: '',
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
    case SET_ERROR:
      return state.set('error', action.payload.message);
    case CLEAR_ERROR:
      return state.set('error', '');
    case TOGGLE_LOADER:
      return state.set('loading', !state.get('loading'));
    default:
      return state;
  }
};
