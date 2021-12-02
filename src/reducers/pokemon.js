import { SET_POKEMONS, SET_FAVORITE } from '../actions/types';
const initialState = {
  list: [],
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
    default:
      return state;
  }
};
