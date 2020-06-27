import { combineReducers } from 'redux';
import comment from './comment';
import user from './user';

const rootReducer = combineReducers({
  comment,
  user
});

export default rootReducer;