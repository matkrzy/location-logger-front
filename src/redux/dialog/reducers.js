import omit from 'lodash/omit';

import {
  DIALOG_REGISTER,
  DIALOG_DESTROY,
  DIALOG_OPEN,
  DIALOG_CLOSE,
} from './action-types';

const initState = {};

const dialogInit = {
  isOpen: false,
  params: null,
};

export const dialogReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DIALOG_REGISTER:
      return {
        ...state,
        [payload.name]: dialogInit,
      };
    case DIALOG_DESTROY:
      return {
        ...omit(state, [payload.name]),
      };
    case DIALOG_OPEN:
      return {
        ...state,
        [payload.name]: {
          ...[state.name],
          isOpen: true,
          params: payload.params,
        },
      };
    case DIALOG_CLOSE:
      return {
        ...state,
        [payload.name]: {
          ...[state.name],
          isOpen: false,
        },
      };
    default:
      return state;
  }
};
