import {GET_TOKENS, ADD_TOKEN, TASKS_LOADING} from '../actions/types';


const initialState = {
  tokens: [],
  loading: false
}

const isSameById = payload => ({_id}) => payload !== _id;

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TOKENS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      };
    case ADD_TOKEN:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
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
