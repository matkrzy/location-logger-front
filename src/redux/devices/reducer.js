import groupBy from 'lodash/groupBy'

import {
  DEVICES_LIST_FETCH_REQUEST,
  DEVICES_LIST_FETCH_SUCCESS,
  DEVICES_LIST_FETCH_FAILURE,
} from './action-types';

const initState = {
  loading: false,
  error: false,
  items: null,
};

export const devicesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DEVICES_LIST_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DEVICES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload,
        byId: groupBy(payload, 'id'),
      };
    case DEVICES_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
