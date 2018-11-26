import {GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING} from '../actions/types';


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
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
