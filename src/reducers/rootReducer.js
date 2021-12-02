import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon';
import { uiReducer } from './ui';

export default combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});
