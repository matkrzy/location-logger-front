import { RSAA } from 'redux-api-middleware';
import { push } from 'react-router-redux';

export const errorsMiddleware = store => next => action => {
  const apiCall = action[RSAA];

  if (!apiCall) {
    if (!!action.payload && !!action.payload.status && action.payload.status === 403) {
      try {
        const tokenName = process.env.REACT_APP_AUTH_TOKEN_NAME;
        localStorage.removeItem(tokenName);
        store.dispatch(
          push({
            pathname: '/login',
          }),
        );
      } catch (e) {}
    }

    return next(action);
  }

  return next(action).then(action => {
    if (action.error) {
      return Promise.reject(action);
    }

    return action;
  });
};
