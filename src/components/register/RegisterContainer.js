import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { RegisterComponent } from './RegisterComponent';
import { register } from 'redux/auth/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = { onSubmit: register };

export const RegisterContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'register',
  }),
)(RegisterComponent);
