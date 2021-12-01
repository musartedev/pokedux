import {
  SET_POKEMONS,
  SET_ERROR,
  CLEAR_ERROR,
  SET_FAVORITE,
} from '../actions/types';
const initialState = {
  list: [],
  error: '',
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_FAVORITE:
      const newPokemonList = [...state.list];
      const currentPokemonIndex = newPokemonList.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      );
      if (currentPokemonIndex >= 0) {
        newPokemonList[currentPokemonIndex].favorite = true;
      }

      return { ...state, list: newPokemonList };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
