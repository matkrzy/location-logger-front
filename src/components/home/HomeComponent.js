import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui';

import { styles } from './Home.styles';
import { routes } from 'components/routes';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { MenuContainer } from 'components/menu/MenuContainer';
import { SectionContainer } from 'components/shared/section/SectionContainer';
import { TracksContainer } from 'components/tracks/TracksContainer';
import { TrackDetailsContainer } from 'components/tracks/details/TrackDetailsContainer';
import { DevicesContainer } from 'components/devices/DevicesContainer';
import { SettingsContainer } from 'components/settings/SettingsContainer';

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
          <Route path={routes.trackById}>
            <Wrapper>
              <SectionContainer title="Track details" backLink={routes.tracks}>
                <TrackDetailsContainer />
              </SectionContainer>
            </Wrapper>
          </Route>
          <Route path={routes.devices}>
            <Wrapper>
              <SectionContainer title="List of devices">
                <DevicesContainer />
              </SectionContainer>
            </Wrapper>
          </Route>
          <Route path={routes.settings}>
            <Wrapper>
              <SectionContainer title="Settings">
                <SettingsContainer />
              </SectionContainer>
            </Wrapper>
          </Route>
        </Switch>
      </Wrapper>
    );
  }
}

export const HomeComponent = withStyles(styles)(Home);
