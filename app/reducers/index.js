'use strict';

import { combineReducers } from 'redux';
//import { routeReducer as routing } from 'redux-simple-router';

import { reducer as auth } from './auth';
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
