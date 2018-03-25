import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { ForgotPasswordComponent } from './ForgotPasswordComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = { onSubmit: data => console.log(data) };

export const ForgotPasswordContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(ForgotPasswordComponent);
