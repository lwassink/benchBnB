import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions.js';

const _default_state = {
  currentUser: null,
  errors: []
};

function SessionReducer(oldState = _default_state, action) {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ERRORS:
      return { errors: action.errors, currentUser: null };
    case RECEIVE_CURRENT_USER:
      return { errors: [], currentUser: action.user };
    case LOGOUT:
      return { errors: [], currentUser: null };
    default:
      return oldState;
  }
}

export default SessionReducer;
