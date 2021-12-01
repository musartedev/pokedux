import { SET_ERROR } from '../actions/types';

export const logAction = (store) => (next) => (actionInfo) => {
  console.log('dispatching', actionInfo);
  next(actionInfo);
};

export const reportError = (store) => (next) => (actionInfo) => {
  const { action } = actionInfo;
  if (action?.type === SET_ERROR) {
    console.error(action.payload);
  }

  next(actionInfo);
};
