import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import { pokemonReducer } from './reducers/pokemon';
import { logAction, reportError } from './middlewares';
import './index.css';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logAction, reportError)
);

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
