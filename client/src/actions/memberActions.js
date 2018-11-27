import axios from 'axios';
import {GET_MEMBERS, ADD_MEMBER, DELETE_MEMBER, MEMBERS_LOADING} from './types';

export const getMembers = () => dispatch => {
  dispatch(setMembersLoading());
  axios
    .get('/api/members')
    .then(res =>
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      })
    )
};

export const addMember = (member) => dispatch => {
  axios
    .post('/api/members', member)
    .then(res =>
      dispatch({
        type: ADD_MEMBER,
        payload: res.data
      })
    )
};

export const deleteMember = (id) => dispatch => {
  axios.delete(`/api/members/${id}`).then(res =>
    dispatch({
      type: DELETE_MEMBER,
      payload: id
    }))
};

export const setMembersLoading = () => ({
  type: MEMBERS_LOADING
});
