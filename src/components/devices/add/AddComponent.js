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

import { styles } from './Add.styles';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { TextField } from 'components/shared/text-field/TextField';

class Add extends Component {
  onCancelClick = () => this.props.dialogClose();

  render() {
    const { handleSubmit, invalid, submitting } = this.props;

    return (
      <Wrapper>
        <DialogTitle>Add new device</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide device name to generate unique device token
          </DialogContentText>
          <form onSubmit={handleSubmit} noValidate>
            <Field
              component={TextField}
              name="name"
              label="Device name"
              placeholder="Enter device name"
              fullWidth
              validate={[required()]}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.onCancelClick}
            color="primary"
            disabled={submitting}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            autoFocus
            disabled={invalid || submitting}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </DialogActions>
      </Wrapper>
    );
  }
}

export const AddComponent = withStyles(styles)(Add);
