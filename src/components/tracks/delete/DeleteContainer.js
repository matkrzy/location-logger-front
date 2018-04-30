import { connect } from 'react-redux';

import {deleteTrack}  from 'redux/track/actions';
import { DeleteComponent } from './DeleteComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  trackDelete: deleteTrack,
};

export const DeleteContainer = connect(mapStateToProps, mapDispatchToProps)(
  DeleteComponent,
);
