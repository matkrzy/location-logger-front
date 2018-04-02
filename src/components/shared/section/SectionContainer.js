import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { SectionComponent } from './SectionComponent';

const mapStateToProps = ({ menu }) => ({
  menu,
});

export const SectionContainer = compose(
  withRouter,
  connect(mapStateToProps, null),
)(SectionComponent);
