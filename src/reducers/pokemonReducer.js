import { CLEAR_ERROR, SET_ERROR, SET_POKEMON } from "../actions/type";

const initialStete = {
  list: [],
  errorMessage: ""
};

const pokemonReducer = (state = initialStete, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR:
      return { ...state, errorMessage: "" };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
