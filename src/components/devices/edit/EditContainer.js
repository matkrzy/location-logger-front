import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { EditComponent } from './EditComponent';
import { updateDevice } from 'redux/devices/actions';

const mapStateToProps = (state, props) => ({
  initialValues: {
    id: props.id,
    name: props.name,
  },
});

const mapDispatchToProps = { onSubmit: updateDevice };

export const EditContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'updateDevice',
  }),
)(EditComponent);
