import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import memberReducer from './memberReducer';

export default combineReducers({
  task: taskReducer,
  member: memberReducer
})
