import { connect } from 'react-redux';

import { SettingsComponent } from './SettingsComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SettingsComponent,
);
