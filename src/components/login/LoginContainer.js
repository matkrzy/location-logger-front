import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { LoginComponent } from './LoginComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = { onSubmit: data => console.log(data) };

export const LoginContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(LoginComponent);
