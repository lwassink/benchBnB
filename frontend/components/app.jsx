import React from 'react';
import GreetingContainer from './greeting_container.js';

export default ({ children }) => (
  <div>
    <h1>This is react!!</h1>
    <GreetingContainer />
    {children}
  </div>
);

