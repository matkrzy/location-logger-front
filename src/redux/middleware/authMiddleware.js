import { RSAA } from 'redux-api-middleware';

export const authMiddleware = store => next => action => {
  const apiCall = action[RSAA];

  if (!apiCall) {
    return next(action);
  }

  const tokenName = process.env.REACT_APP_AUTH_TOKEN_NAME;
  const token  = localStorage.getItem(tokenName);

  if (apiCall.skipAuth || !token) {
    const { skipAuth, ...rest } = apiCall;

    return next({
      [RSAA]: rest,
    });
  }

  return next({
    [RSAA]: {
      ...apiCall,
      headers: {
        ...apiCall.headers,
        Authorization: `Bearer ${token}`,
      },
    },
  });
};