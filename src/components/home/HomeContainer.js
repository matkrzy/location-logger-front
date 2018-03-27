import { connect } from 'react-redux';

import { HomeComponent } from './HomeComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
