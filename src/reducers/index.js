import { combineReducers } from 'redux';
import getMode from './allreducers';

const rootReducer = combineReducers({
  getMode,
});
export default rootReducer;