import { connect } from 'react-redux';

import { DevicesComponent } from './DevicesComponent';

import { dialogOpen } from 'redux/dialog/actions';
import { fetchDevices } from 'redux/devices/actions';

const mapStateToProps = ({ devices }) => ({
  ...devices,
});

const mapDispatchToProps = { dialogOpen, fetchDevices };

export const DevicesContainer = connect(mapStateToProps, mapDispatchToProps)(
  DevicesComponent,
);
