import axios from 'axios';
import {GET_TOKENS, ADD_TOKEN, TOKENS_LOADING} from './types';

export const getTokens = () => dispatch => {
  dispatch(setTokensLoading());
  axios
    .get('/api/tokens')
    .then(res =>
      dispatch({
        type: GET_TOKENS,
        payload: res.data
      })
    )
};

export const addToken = (token) => dispatch => {
  axios
    .post('/api/tokens', token)
    .then(res =>
      dispatch({
        type: ADD_TOKEN,
        payload: res.data
      })
    )
};

export const setTokensLoading = () => ({
  type: TOKENS_LOADING
});
