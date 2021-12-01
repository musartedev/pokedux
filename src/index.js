import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import App from './containers/App';
import { pokemonReducer } from './reducers/pokemon';
import { logAction, reportError } from './middlewares';
import pokemonSaga from './saga';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, logAction, reportError)
);

const store = createStore(pokemonReducer, composedEnhancers);

sagaMiddleware.run(pokemonSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
