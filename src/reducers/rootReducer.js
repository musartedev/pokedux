import { combineReducers } from 'redux-immutable';
import { pokemonReducer } from './pokemon';
import { uiReducer } from './ui';

export default combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});
