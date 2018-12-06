import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import memberReducer from './memberReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  task: taskReducer,
  member: memberReducer,
  token: tokenReducer
})
