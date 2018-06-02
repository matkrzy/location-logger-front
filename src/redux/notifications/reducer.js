import { NOTIFICATION_ADD, NOTIFICATION_TAKE } from './actions-types';

const initState = [];

export const notificationsReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case NOTIFICATION_ADD:
      return [...state, payload];
    case NOTIFICATION_TAKE:
      return state.slice(1, state.length);
    default:
      return state;
  }
};
