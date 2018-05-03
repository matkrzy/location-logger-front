import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { TrackDetailsComponent } from './TrackDetailsComponent';
import { toggleMenu } from 'redux/menu/actions';
import { fetchTrackDetails, fetchTrackPoints } from 'redux/track/actions';

const mapStateToProps = ({ track: { details,points }, loading }) => ({
  details,
  points,
  loading,
});

const mapDispatchToProps = {
  toggleMenu,
  fetchTrackDetails,
  fetchTrackPoints,
};

export const TrackDetailsContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(TrackDetailsComponent);
