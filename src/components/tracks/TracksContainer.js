import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { TracksComponent } from './TracksComponent';
import { dialogOpen } from 'redux/dialog/actions';
import { fetchTracksList } from 'redux/tracks/actions';

const mapStateToProps = ({ tracks: { items, loading } }) => ({
  tracks: items,
  loading,
});

const mapDispatchToProps = { dialogOpen, fetchTracksList };

export const TracksContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(TracksComponent);
