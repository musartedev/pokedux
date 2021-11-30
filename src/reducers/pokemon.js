import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from '../actions/types';
const initialState = {
  list: [],
  error: '',
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
