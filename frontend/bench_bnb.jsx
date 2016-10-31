import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import { merge, union } from 'lodash';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded",() => {
  window.merge = merge;
  window.union = union;
  let store;
  if (window.currentUser) {
    store = configureStore({ session: { currentUser: window.currentUser, errors: [] } });
  } else {
    store = configureStore();
  }
  window.store = store

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
