import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container.js';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={SessionFormContainer} />
        <Route path="signup" component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;
