import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import { AppContainer } from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/store';

const history = createBrowserHistory();
const store = configureStore(history);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );

registerServiceWorker();

render(AppContainer);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(AppContainer);
  });
}
