import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { LoginContainer } from './login/LoginContainer';
import { RegisterContainer } from './register/RegisterContainer';

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.home} render={() => <div>home</div>} />
          <Route path={routes.login} component={LoginContainer} />
          <Route path={routes.register} component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}
