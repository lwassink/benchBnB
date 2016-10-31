import { REQUEST_BENCHES, receiveBenches } from '../actions/bench_actions.js';
import { fetchBenches } from '../util/bench_api_util.js';

const BenchMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_BENCHES:
      fetchBenches(benches => dispatch(receiveBenches(benches)));
      return next(action);
    default:
      return next(action);
  }
};

export default BenchMiddleware;
