import { connect } from 'react-redux';

import { TrackDetailsComponent } from './TrackDetailsComponent';
import { points } from './randomData';
import { toggleMenu } from 'redux/menu/actions';

const mapStateToProps = state => ({
  id: 1,
  name: 'Forest running',
  date: 1522692378661,
  distance: 56.4,
  duration: 1584,
  startTime: 1522692378661,
  endTime: 1522692586070,
  maxSpeed: 66.2,
  avgSpeed: 45.4,
  minSpeed: 15.2,
  maxAltitude: 200,
  avgAltitude: 120,
  minAltitude: 90,
  removed: false,
  points,
});

const mapDispatchToProps = { toggleMenu };

export const TrackDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackDetailsComponent);
