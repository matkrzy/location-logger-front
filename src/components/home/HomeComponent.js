import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui';

import { styles } from './Home.styles';
import { routes } from 'components/routes';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { MenuContainer } from 'components/menu/MenuContainer';
import { SectionContainer } from 'components/shared/section/SectionContainer';
import { TracksContainer } from 'components/tracks/TracksContainer';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <MenuContainer />

        <Switch>
          <Route path={routes.tracks}>
            <Wrapper>
              <SectionContainer title="List of all saved tracks">
                <TracksContainer />
              </SectionContainer>
            </Wrapper>
          </Route>
        </Switch>
      </Wrapper>
    );
  }
}

export const HomeComponent = withStyles(styles)(Home);
