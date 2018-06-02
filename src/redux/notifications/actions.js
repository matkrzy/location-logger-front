import {
  NOTIFICATION_ADD,
  NOTIFICATION_TAKE,
} from './actions-types';

export const notification = payload => ({
  type: NOTIFICATION_ADD,
  payload,
});

export const notificationTake = () => ({
  type: NOTIFICATION_TAKE,
});
