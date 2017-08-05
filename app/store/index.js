'use strict';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index.js';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  );
  return createStore(rootReducer, initialState, enhancer);
}