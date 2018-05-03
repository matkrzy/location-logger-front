import React, { Component } from 'react';
import {
  withStyles,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from 'material-ui';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { styles } from './Edit.styles';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { TextField } from 'components/shared/text-field/TextField';

class Edit extends Component {
  onCancelClick = () => this.props.dialogClose();

  render() {
    const { handleSubmit, invalid } = this.props;

    console.log(this.props);

    return (
      <Wrapper>
        <DialogTitle>Edit device name</DialogTitle>
        <DialogContent>
          <DialogContentText>Please provide new device name</DialogContentText>
          <form onSubmit={handleSubmit} noValidate>
            <Field
              component={TextField}
              name="name"
              label="Device name"
              placeholder="Enter device name"
              fullWidth
              validate={[required()]}
            />
            <Field component="input" name="id" hidden />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancelClick} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            autoFocus
            disabled={invalid}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Wrapper>
    );
  }
}

export const EditComponent = withStyles(styles)(Edit);
