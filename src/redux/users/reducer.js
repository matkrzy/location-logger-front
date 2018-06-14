import {
  USERS_FETCH_ALL_REQUEST,
  USERS_FETCH_ALL_SUCCESS,
  USERS_FETCH_ALL_FAILURE,
  USERS_UPDATE_REQUEST,
  USERS_UPDATE_SUCCESS,
  USERS_UPDATE_FAILURE,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_DELETE_FAILURE,
} from './action-types';

const initState = { loading: false, error: false, list: [] };

export const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERS_FETCH_ALL_REQUEST:
      return { ...state, loading: true };
      
    case USERS_FETCH_ALL_SUCCESS:
      return { ...state, loading: false, list: payload };
      
    case USERS_FETCH_ALL_FAILURE:
      return { ...state, loading: false, error: true };
      
    case USERS_UPDATE_REQUEST:
    case USERS_DELETE_REQUEST:
      return { ...state, loading: true };
      
    case USERS_UPDATE_SUCCESS:
    case USERS_DELETE_SUCCESS:
      return { ...state, loading: false };
      
    case USERS_UPDATE_FAILURE:
    case USERS_DELETE_FAILURE:
      return { ...state, loading: false, error: true };
      
    default:
      return state;
  }
};
