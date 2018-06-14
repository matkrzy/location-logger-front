import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { UsersComponent } from './UsersComponent';
import { fetchAllUsers, updateUser } from 'redux/users/actions';
import { dialogOpen } from 'redux/dialog/actions';

const mapStateToProps = ({ users, auth: { user } }) => ({ ...users, user });

const mapDispatchToProps = {
  fetchAllUsers,
  updateUser,
  dialogOpen,
};

export const UsersContainer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(UsersComponent);
