import {GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, TASKS_LOADING} from '../actions/types';


const initialState = {
  tasks: [],
  loading: false
}

const isSameById = payload => ({_id}) => payload !== _id;

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(isSameById(action.payload))
      };
    case UPDATE_TASK:
      const tasks = state.tasks.map(task => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });
      return {
        ...state,
        tasks
      };
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
