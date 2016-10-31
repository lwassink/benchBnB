import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container.js';
import App from './app.jsx';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = () => {
    if (store.getState().session.currentUser) {
      hashHistory.replace("/");
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
