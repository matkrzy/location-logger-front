import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { AddComponent } from './AddComponent';
import { addDevice } from 'redux/devices/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = { onSubmit: addDevice };

export const AddContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'addDevice',
  }),
)(AddComponent);
