import { isEmpty } from 'lodash';
import { SubmissionError } from 'redux-form';
import { set, forIn } from 'lodash';

export const validationMiddleware = store => next => action => {
  if (
    action.error &&
    action.payload instanceof Error &&
    action.payload.status === 400
  ) {
    const { errors, message } = action.payload.response;

    next(action);

    if (!isEmpty(errors)) {
      const parsedErrors = {};

      forIn(errors, (value, key) => {
        set(parsedErrors, key, value);
      });

      throw new SubmissionError(parsedErrors);
    } else {
      throw new SubmissionError({ _error: message });
    }
  }

  return next(action);
};
