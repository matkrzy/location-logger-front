import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_ME_REQUEST,
  USER_ME_SUCCESS,
  USER_ME_FAILURE,
  USER_LOGOUT
} from './action-types';

const initState = {
  loading: false,
  error: false,
  user: null,
};

export const authReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_ME_REQUEST:
      return {...state, loading: true};
    case USER_LOGIN_SUCCESS:
    case USER_ME_SUCCESS:
      return {...state, loading: false, user: payload};
    case USER_LOGIN_FAILURE:
    case USER_ME_FAILURE:
      return {...state, loading: false, error: true, user: payload};
    case USER_LOGOUT:{
      return {
        initState
      }
    }
    default:
      return state;
  }
};
