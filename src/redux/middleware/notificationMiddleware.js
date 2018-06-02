import { notification } from 'redux/notifications/actions';

export const notificationMiddleware = store => next => action => {
  if (!!action.meta && action.meta.notification) {
    store.dispatch(notification(action.meta.notification));
  }

  return next(action);
};
