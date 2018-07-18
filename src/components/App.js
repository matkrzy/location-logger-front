import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { LoginContainer } from './login/LoginContainer';
import { RegisterContainer } from './register/RegisterContainer';
import { ForgotPasswordContainer } from './forgot-password/ForgotPasswordContainer';
import { HomeComponent } from './home/HomeComponent';
import { NotificationsContainer } from 'components/notifications/NotificationsContainer';
import { Wrapper } from 'components/shared/wrapper/Wrapper';

export class App extends Component {
  componentDidMount() {
    const {
      user,
      fetchUserData,
      history: { push },
    } = this.props;
    const tokenName = process.env.REACT_APP_AUTH_TOKEN_NAME;

    if (!user && !!localStorage.getItem(tokenName)) {
      fetchUserData();
    } else {
      push('/login');
    }
  }

  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path={routes.login} component={LoginContainer} />
          <Route path={routes.register} component={RegisterContainer} />
          <Route path={routes.forgotPassword} component={ForgotPasswordContainer} />
          <Route path={routes.home} component={HomeComponent} />
        </Switch>
        <NotificationsContainer />
      </Wrapper>
    );
  }
}
