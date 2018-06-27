import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Default data for the app to load (could be pulled from API)
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

/* You could pass in an object directly instead of using the const 'defaultState',
but it's better to use a separate object. Allows you to easily change that object later. */
const store = createStore(rootReducer, defaultState);

// We're creating 'history' in 'store.js', but we'll use it in other files.
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
