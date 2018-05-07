import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { TrackDetailsComponent } from './TrackDetailsComponent';
import { toggleMenu } from 'redux/menu/actions';
import { fetchTrackDetails } from 'redux/track/actions';

const mapStateToProps = ({ track: { details }, loading }) => ({
  details,
  loading,
});

const mapDispatchToProps = {
  toggleMenu,
  fetchTrackDetails,
};

export const TrackDetailsContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(TrackDetailsComponent);
