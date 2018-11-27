import {GET_MEMBERS, ADD_MEMBER, DELETE_MEMBER, MEMBERS_LOADING} from '../actions/types';


const initialState = {
  members: [],
  loading: false
}

const isSameById = payload => ({_id}) => payload !== _id;

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false
      };
    case ADD_MEMBER:
      return {
        ...state,
        members: [action.payload, ...state.members]
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(isSameById(action.payload))
      };
    case MEMBERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
