import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BenchReducer from './benches_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchReducer
});

export default RootReducer;
