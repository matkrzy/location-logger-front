import groupBy from 'lodash/groupBy';

import {
  TRACKS_FETCH_LIST_REQUEST,
  TRACKS_FETCH_LIST_SUCCESS,
  TRACKS_FETCH_LIST_FAILURE,
  TRACK_IMPORT_REQUEST,
  TRACK_IMPORT_SUCCESS,
  TRACK_IMPORT_FAILURE,
} from './action-types';

const initState = {
  items: [],
  loading: false,
  error: false,
};

export const tracksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TRACKS_FETCH_LIST_REQUEST:
    case TRACK_IMPORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRACKS_FETCH_LIST_SUCCESS:
      return {
        ...state,
        items: payload,
        byId: groupBy(payload, 'id'),
        loading: false,
      };
    case TRACK_IMPORT_SUCCESS:
      return { ...state, loading: false };
    case TRACKS_FETCH_LIST_FAILURE:
    case TRACK_IMPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
