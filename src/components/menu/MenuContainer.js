import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { MenuComponent } from './MenuComponent';
import { logout } from 'redux/auth/actions';

const mapStateToProps = ({ menu, auth: { user } }) => ({
  ...menu,
  user,
});

const mapDispatchToProps = { logout };

export const MenuContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(MenuComponent);
