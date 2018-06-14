import { RSAA } from 'redux-api-middleware';

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

export const fetchAllUsers = () => ({
  [RSAA]: {
    endpoint: '/users',
    method: 'GET',
    types: [
      USERS_FETCH_ALL_REQUEST,
      USERS_FETCH_ALL_SUCCESS,
      {
        type: USERS_FETCH_ALL_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});

export const updateUser = user => ({
  [RSAA]: {
    endpoint: `/user/${user.id}`,
    method: 'PUT',
    body: user,
    types: [
      USERS_UPDATE_REQUEST,
      {
        type: USERS_UPDATE_SUCCESS,
        meta: {
          notification: { message: 'User has been updated' },
        },
      },
      {
        type: USERS_UPDATE_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});

export const deleteUser = user => ({
  [RSAA]: {
    endpoint: `/user/${user.id}`,
    method: 'DELETE',
    types: [
      USERS_DELETE_REQUEST,
      {
        type: USERS_DELETE_SUCCESS,
        meta: {
          notification: { message: 'User has been deleted' },
        },
      },
      {
        type: USERS_DELETE_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});
