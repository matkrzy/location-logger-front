import { connect } from 'react-redux';

import { DeleteComponent } from './DeleteComponent';
import { deleteUser } from 'redux/users/actions';

const mapDispatchToProps = {
  deleteUser,
};

export const DeleteContainer = connect(
  null,
  mapDispatchToProps,
)(DeleteComponent);
