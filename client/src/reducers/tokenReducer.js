import {GET_TOKENS, ADD_TOKEN, TOKENS_LOADING} from '../actions/tokens';


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
        tokens: action.payload,
        loading: false
      };
    case ADD_TOKEN:
      return {
        ...state,
        tokens: [action.payload, ...state.tokens]
      };
    case TOKENS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}