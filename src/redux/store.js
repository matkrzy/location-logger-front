import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from './reducers';

const middlewares = [];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = (history:any) => {
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

  return store;
};
