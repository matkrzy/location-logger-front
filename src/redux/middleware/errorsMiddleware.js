import { RSAA } from 'redux-api-middleware';

export const errorsMiddleware = store => next => action => {
  const apiCall = action[RSAA];
  
  if (!apiCall) {
    return next(action);
  }
  
  return next(action)
    .then((action) => {
      if (action.error) {
        return Promise.reject(action);
      }

      return action;
    });
};
