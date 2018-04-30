import {
  TRACK_FETCH_DETAILS_REQUEST,
  TRACK_FETCH_DETAILS_SUCCESS,
  TRACK_FETCH_DETAILS_FAILURE,
  TRACK_FETCH_POINTS_REQUEST,
  TRACK_FETCH_POINTS_SUCCESS,
  TRACK_FETCH_POINTS_FAILURE,
} from './action-types';

const initState = {
  loading: false,
  error: false,
  details: false,
  points: [],
};
export const trackReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TRACK_FETCH_DETAILS_REQUEST:
    case TRACK_FETCH_POINTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TRACK_FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        details: payload,
        loading: false,
      };
    case TRACK_FETCH_DETAILS_FAILURE:
    case TRACK_FETCH_POINTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case TRACK_FETCH_POINTS_SUCCESS:
      return {
        ...state,
        points: payload,
      };
    default:
      return state;
  }
};
