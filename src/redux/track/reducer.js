import {
  TRACK_FETCH_DETAILS_REQUEST,
  TRACK_FETCH_DETAILS_SUCCESS,
  TRACK_FETCH_DETAILS_FAILURE,
} from './action-types';

const initState = {
  loading: false,
  error: false,
  details: {
    points: [],
  },
};
export const trackReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TRACK_FETCH_DETAILS_REQUEST:
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
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
