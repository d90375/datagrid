import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { save } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store/rootReducer';

const configureStore = initialState => {
  const middleware = [thunk, save({ namespace: 'grid' })];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
};

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
