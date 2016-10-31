import { RECEIVE_BENCHES } from '../actions/bench_actions.js';

const BenchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return oldState;
  }
};

export default BenchReducer;

