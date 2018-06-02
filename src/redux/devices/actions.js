import { RSAA } from 'redux-api-middleware';

import {
  DEVICES_LIST_FETCH_REQUEST,
  DEVICES_LIST_FETCH_SUCCESS,
  DEVICES_LIST_FETCH_FAILURE,
  DEVICE_ADD_REQUEST,
  DEVICE_ADD_SUCCESS,
  DEVICE_ADD_FAILURE,
  DEVICE_REMOVE_REQUEST,
  DEVICE_REMOVE_SUCCESS,
  DEVICE_REMOVE_FAILURE,
  DEVICE_UPDATE_REQUEST,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAILURE,
} from './action-types';

export const fetchDevices = () => ({
  [RSAA]: {
    endpoint: '/devices',
    method: 'GET',
    types: [
      DEVICES_LIST_FETCH_REQUEST,
      DEVICES_LIST_FETCH_SUCCESS,
      DEVICES_LIST_FETCH_FAILURE,
    ],
  },
});

export const addDevice = data => ({
  [RSAA]: {
    endpoint: '/devices',
    method: 'POST',
    body: data,
    types: [
      DEVICE_ADD_REQUEST,
      {
        type: DEVICE_ADD_SUCCESS,
        meta: { notification: { message: 'New device added' } },
      },
      {
        type: DEVICE_ADD_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});

export const removeDevice = ({ id }) => ({
  [RSAA]: {
    endpoint: `/device/${id}`,
    method: 'DELETE',
    types: [
      DEVICE_REMOVE_REQUEST,
      {
        type: DEVICE_REMOVE_SUCCESS,
        meta: { notification: { message: 'Device has been removed' } },
      },
      {
        type: DEVICE_REMOVE_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});

export const updateDevice = data => ({
  [RSAA]: {
    endpoint: `/device/${data.id}`,
    method: 'PUT',
    body: data,
    types: [
      DEVICE_UPDATE_REQUEST,
      {
        type: DEVICE_UPDATE_SUCCESS,
        meta: {
          notification: { message: 'Device has been updated' },
        },
      },
      {
        type: DEVICE_UPDATE_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});
