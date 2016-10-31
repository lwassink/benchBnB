import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login, signup } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  loggedIn: state.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: ownProps.location.pathname === "/signup" ? "signup" : "login",
    proccessForm: ownProps.location.pathname === "/signup" ? user => dispatch(signup(user)) : user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
