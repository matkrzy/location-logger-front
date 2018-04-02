import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import { styles } from './Settings.styles';
import { UserDataContainer } from './user-data/UserDataContainer';
import { Wrapper } from 'components/shared/wrapper/Wrapper';

class Settings extends Component {
  render() {
    return (
      <Wrapper>
        <UserDataContainer />
      </Wrapper>
    );
  }
}

export const SettingsComponent = withStyles(styles)(Settings);
