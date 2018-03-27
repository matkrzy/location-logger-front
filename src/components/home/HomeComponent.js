import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import { styles } from './Home.styles';

export class Home extends Component {
  render() {
    return <div>Home component</div>;
  }
}

export const HomeComponent = withStyles(styles)(Home);
