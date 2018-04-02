import React, { Component } from 'react';
import { withStyles, Typography, Button } from 'material-ui';
import { Field } from 'redux-form';
import { required, email } from 'redux-form-validators';

import { TextField } from 'components/shared/text-field/TextField';
import { styles } from './UserData.styles';

class UserData extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;

    return (
      <section>
        <Typography variant="headline">User</Typography>
        <Typography>Here you can edit your profile</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Field
            name="email"
            component={TextField}
            label="Email"
            placeholder="Enter new email"
            validate={[required(), email()]}
          />
        </form>
        <Button
          onClick={handleSubmit}
          variant="raised"
          color="primary"
          disabled={invalid}
        >
          update
        </Button>
      </section>
    );
  }
}

export const UserDataComponent = withStyles(styles)(UserData);
