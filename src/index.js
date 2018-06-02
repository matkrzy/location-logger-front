import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';

import './index.css';
import { AppContainer } from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/store';

import { theme } from './components/themes/theme';

const history = createBrowserHistory();
const store = configureStore(history);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <Component />
        </MuiThemeProvider>
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
