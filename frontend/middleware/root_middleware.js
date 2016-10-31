import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import BenchesMiddleware from '../middleware/benches_middleware.js';

export default applyMiddleware(
  SessionMiddleware,
  BenchesMiddleware
);
