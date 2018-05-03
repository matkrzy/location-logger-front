import { RSAA } from 'redux-api-middleware';

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_ME_REQUEST,
  USER_ME_SUCCESS,
  USER_ME_FAILURE,
  USER_LOGOUT,
} from './action-types';

export const register = body => ({
  [RSAA]: {
    endpoint: '/user/register',
    method: 'POST',
    body,
    types: [
      USER_REGISTER_REQUEST,
      USER_REGISTER_SUCCESS,
      USER_REGISTER_FAILURE,
    ],
  },
});

export const login = body => ({
  [RSAA]: {
    endpoint: '/user/login',
    method: 'POST',
    skipAuth: true,
    body,
    types: [USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE],
  },
});

export const fetchUserData = () => ({
  [RSAA]: {
    endpoint: '/user/me',
    method: 'GET',
    types: [USER_ME_REQUEST, USER_ME_SUCCESS, USER_ME_FAILURE],
  },
});

export const logout = () => ({
  type: USER_LOGOUT,
});
