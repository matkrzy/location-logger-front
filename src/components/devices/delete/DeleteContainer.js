import { connect } from 'react-redux';

import { DeleteComponent } from './DeleteComponent';
import { removeDevice } from 'redux/devices/actions';

const mapDispatchToProps = {
  removeDevice,
};

export const DeleteContainer = connect(null, mapDispatchToProps)(DeleteComponent);
