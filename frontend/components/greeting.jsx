import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ user, logout }) => {
  if (user) {
    return (
      <div>
        <span>Welcome to Bench BnB, {user.username}</span>
        <br />
        <button onClick={logout}>Logout</button>
      </div>
    )} else {
      return (
        <div>
          <Link to="/signup" >Sign up</Link>
          <br />
          <Link to="/login" >Log in</Link>
        </div>
      )
    }
};

export default Greeting;

