import { SET_POKEMONS } from '../actions/types';
const initialState = {
  list: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
