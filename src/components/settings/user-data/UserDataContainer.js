import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { UserDataComponent } from './UserDataComponent';

const mapStateToProps = state => ({
  initialValues: {
    email: 'email@email.com',
  },
});

const mapDispatchToProps = {
  onSubmit: data => console.log(data),
};

export const UserDataContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'userProfile',
    enableReinitialize: true,
  }),
)(UserDataComponent);
