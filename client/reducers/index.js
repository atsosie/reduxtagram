/*
We create a reducer for every single piece of state (in this case: posts, comments),
then combine those reducers into one 'rootReducer'.

Reducer takes in 2 things:
  1. the action (info about what happened)
  2. copy of current state
*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
