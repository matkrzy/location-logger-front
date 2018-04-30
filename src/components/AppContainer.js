import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { App } from './App';

import { fetchUserData } from 'redux/auth/actions';

const mapStateToProps = ({ auth: { loading } }) => ({ loading });

const mapDispatchToProps = { fetchUserData };

export const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
