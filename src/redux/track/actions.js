import { RSAA } from 'redux-api-middleware';

import {
  TRACK_FETCH_DETAILS_REQUEST,
  TRACK_FETCH_DETAILS_SUCCESS,
  TRACK_FETCH_DETAILS_FAILURE,
  TRACK_DELETE_REQUEST,
  TRACK_DELETE_SUCCESS,
  TRACK_DELETE_FAILURE,
} from './action-types';

export const fetchTrackDetails = id => ({
  [RSAA]: {
    endpoint: `/track/${id}`,
    method: 'GET',
    types: [
      TRACK_FETCH_DETAILS_REQUEST,
      TRACK_FETCH_DETAILS_SUCCESS,
      TRACK_FETCH_DETAILS_FAILURE,
    ],
  },
});

export const deleteTrack = id => ({
  [RSAA]: {
    endpoint: `/track/${id}`,
    method: 'DELETE',
    types: [
      TRACK_DELETE_REQUEST,
      {
        type: TRACK_DELETE_SUCCESS,
        meta: {
          notification: { message: 'Track has been deleted' },
        },
      },
      {
        type: TRACK_DELETE_FAILURE,
        meta: {
          notification: { message: 'Something went wrong. Please try again' },
        },
      },
    ],
  },
});
