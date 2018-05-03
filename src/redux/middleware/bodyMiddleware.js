import { RSAA } from 'redux-api-middleware';

// Based on https://gist.github.com/ghinda/8442a57f22099bdb2e34
function objectToFormData(obj, form, namespace) {
  let fd = form || new FormData();
  let formKey;

  for (let property of Object.keys(obj)) {
    if (namespace) {
      formKey = namespace + '[' + property + ']';
    } else {
      formKey = property;
    }

    if (!obj[property] && obj[property] !== '' && obj[property] !== 0) {
      continue;
    }

    if (typeof obj[property] === 'object' && !(obj[property] instanceof Blob)) {
      objectToFormData(obj[property], fd, formKey);
    } else {
      if (obj[property] instanceof Blob && !(obj[property] instanceof File)) {
        fd.append(formKey, obj[property], obj[property].name);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
}

const ignoreCall = apiCall => {
  return (
    (apiCall.body === undefined && apiCall.formData === undefined) ||
    (apiCall.headers && apiCall.headers['Content-Type'])
  );
};

export const bodyMiddleware = () => next => action => {
  const apiCall = action[RSAA];

  if (!apiCall || ignoreCall(apiCall)) {
    return next(action);
  }

  const { formData, body, headers, ...other } = apiCall;

  return next({
    [RSAA]: {
      ...other,
      headers: formData
        ? headers
        : { ...headers, 'Content-Type': 'application/json' },
      body: formData ? objectToFormData(formData) : JSON.stringify(body),
    },
  });
};