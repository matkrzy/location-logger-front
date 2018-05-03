import { RSAA } from 'redux-api-middleware';

const API_URL = process.env.REACT_APP_API_URL;

const ignoreCall = apiCall => {
  return apiCall.endpoint.indexOf('/') !== 0;
};

export const endpointMiddleware = () => next => action => {
  const apiCall = action[RSAA];

  if (!apiCall || ignoreCall(apiCall)) {
    return next(action);
  }

  return next({
    [RSAA]: {
      ...apiCall,
      endpoint: `${API_URL}${apiCall.endpoint}`,
    },
  });
};