import { SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER } from '../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: '',
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
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
