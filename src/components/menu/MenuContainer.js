import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { MenuComponent } from './MenuComponent';

const mapStateToProps = ({ menu }) => ({
  ...menu,
  user: {
    id: 1,
    email: 'user.name@userservice.com',
    removed: false,
  },
});

const mapDispatchToProps = {};

export const MenuContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(MenuComponent);
