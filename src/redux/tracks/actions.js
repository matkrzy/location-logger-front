import { RSAA } from 'redux-api-middleware';

import {
  TRACKS_FETCH_LIST_REQUEST,
  TRACKS_FETCH_LIST_SUCCESS,
  TRACKS_FETCH_LIST_FAILURE,
  TRACK_IMPORT_REQUEST,
  TRACK_IMPORT_SUCCESS,
  TRACK_IMPORT_FAILURE,
} from './action-types';

export const fetchTracksList = () => ({
  [RSAA]: {
    endpoint: '/tracks',
    method: 'GET',
    types: [
      TRACKS_FETCH_LIST_REQUEST,
      TRACKS_FETCH_LIST_SUCCESS,
      TRACKS_FETCH_LIST_FAILURE,
    ],
  },
});

export const importTrack = body => ({
  [RSAA]: {
    endpoint: '/tracks/import',
    method: 'POST',
    formData: body,
    types: [TRACK_IMPORT_REQUEST, TRACK_IMPORT_SUCCESS, TRACK_IMPORT_FAILURE],
  },
});
