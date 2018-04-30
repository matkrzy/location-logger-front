import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { ImportComponent } from './ImportComponent';
import { importTrack } from 'redux/tracks/actions';
import { fetchDevices } from 'redux/devices/actions';

const mapStateToProps = ({ devices: { items } }) => ({
  devices: !!items ? items : [],
});

const mapDispatchToProps = { onSubmit: importTrack, fetchDevices };

export const ImportContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'importTrack',
  }),
)(ImportComponent);
