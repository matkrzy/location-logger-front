import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { LoginComponent } from './LoginComponent';
import { login } from 'redux/auth/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(login(data)),
});

export const LoginContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(LoginComponent);
