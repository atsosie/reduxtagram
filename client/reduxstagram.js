import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
/*
We import 'browserHistory' here and use it in <Router history={browserHistory}>
in order to get things working up front, but it'll be replaced when we add Redux.
It allows us to use Push State to change URLs without having to reload the page.
*/

import { Provider } from 'react-redux';
import store, { history } from './store';

// Build a Router component
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);
// The <Provider /> tag exposes our store to our actual application.
// We edit <Router history={browserHistory}> by changing it to {history}.

render(router, document.getElementById('root'));

/*
ROUTER EXPLANATION:

The <Router /> is a component. That Router component needs a history object.
Nested inside the Router is a container component (Main), which has child components
(PhotoGrid) and (Single).

If path matches '/' + anything after the '/', grab the {Main} component. But then,
depending on the url structure, another component will be passed to {Main}:
either {Photo-Grid} or {Single}.

<Route path='/' component={Main}> ... this means {Main} is the top level

<IndexRoute component={PhotoGrid} /> ... this means {PhotoGrid} is
the default component to render if the path is just '/' (the index or homepage)

<Route path="/view/:postId" component={Single} /> ... this determines which

*/
