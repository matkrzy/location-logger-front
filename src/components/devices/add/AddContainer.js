import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { AddComponent } from './AddComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = { onSubmit: data => console.log(data) };

export const AddContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'addDevice' }),
)(AddComponent);
