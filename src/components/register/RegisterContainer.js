import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { RegisterComponent } from './RegisterComponent';

const mapStateToProps = () => ({});

const mapDispatchToProps = { onSubmit: data => console.log(data) };

export const RegisterContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'register',
  }),
)(RegisterComponent);
