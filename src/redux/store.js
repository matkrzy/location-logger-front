import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import createSagaMiddleware from 'redux-saga';

import { bodyMiddleware } from './middleware/bodyMiddleware';
import { endpointMiddleware } from './middleware/endpointMiddleware';
import { authMiddleware } from './middleware/authMiddleware';
import { errorsMiddleware } from './middleware/errorsMiddleware';
import { validationMiddleware } from './middleware/validationMiddleware';
import { notificationMiddleware } from './middleware/notificationMiddleware';

import { saga } from './saga';

import { reducers } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  bodyMiddleware,
  endpointMiddleware,
  authMiddleware,
  apiMiddleware,
  notificationMiddleware,
  errorsMiddleware,
  validationMiddleware,
  sagaMiddleware,
];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = history => {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...[...middlewares, routerMiddleware(history)]),
    ),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers);
    });
  }

  sagaMiddleware.run(saga);

  return store;
};
