import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { LoginContainer } from './login/LoginContainer';
import { RegisterContainer } from './register/RegisterContainer';
import { ForgotPasswordContainer } from './forgot-password/ForgotPasswordContainer';
import { HomeComponent } from './home/HomeComponent';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.login} component={LoginContainer} />
        <Route path={routes.register} component={RegisterContainer} />
        <Route
          path={routes.forgotPassword}
          component={ForgotPasswordContainer}
        />
        <Route path={routes.home} component={HomeComponent} />
      </Switch>
    );
  }
}
