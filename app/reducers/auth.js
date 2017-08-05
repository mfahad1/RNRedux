'use strict';

import {
  LOGIN_IN
} from '../actions/types';

export function reducer(state = {
}, action = { type: '' }) {
  console.log("in reducer" , action);
  switch (action.type) {
    case LOGIN_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
