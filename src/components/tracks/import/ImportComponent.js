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

import { styles } from './Import.styles';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { TextField } from 'components/shared/text-field/TextField';
import { SelectField } from 'components/shared/select-field/SelectField';
import { ButtonLoader } from 'components/shared/button/Button';

export const field_file = ({
  input,
  type,
  meta: { touched, error, warning },
}) => {
  delete input.value;

  return <input {...input} type={type} />;
};

class Import extends Component {
  componentWillMount() {
    this.props.fetchDevices();
  }

  onCancelClick = () => this.props.dialogClose();

  render() {
    const { handleSubmit, invalid, submitting, devices, loading } = this.props;

    return (
      <Wrapper>
        <DialogTitle>Import track</DialogTitle>
        <DialogContent>
          <DialogContentText>Please provide track details</DialogContentText>
          <form onSubmit={handleSubmit} noValidate>
            <Field
              component={TextField}
              name="name"
              label="Track name"
              placeholder="Enter track name"
              fullWidth
              validate={[required()]}
            />
            <Field
              component={SelectField}
              name="device"
              label="Device"
              placeholder="Select device"
              renderLabel={item => item.name}
              items={devices}
              valueProp="id"
              fullWidth
              validate={[required()]}
            />
            <Field
              component={field_file}
              type="file"
              name="file"
              label="Track points"
              placeholder="Enter track date"
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

          <ButtonLoader
            type="submit"
            variant="raised"
            color="primary"
            disabled={invalid || submitting}
            loading={loading}
            onClick={handleSubmit}
            label="Add"
          />
        </DialogActions>
      </Wrapper>
    );
  }
}

export const ImportComponent = withStyles(styles)(Import);
