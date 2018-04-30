import React, { Component } from 'react';
import {
  withStyles,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from 'material-ui';

import { styles } from './Delete.styles';
import { Wrapper } from 'components/shared/wrapper/Wrapper';

class Delete extends Component {
  onConfirmClick = () => {
    const { id } = this.props;
    this.props.trackDelete(id);
    this.props.dialogClose();
  };

  onCancelClick = () => this.props.dialogClose();

  render() {
    const { name } = this.props;

    return (
      <Wrapper>
        <DialogTitle>Delete {name}?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure that you want to delete this track?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancelClick} color="primary">
            cancel
          </Button>
          <Button onClick={this.onConfirmClick} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Wrapper>
    );
  }
}

export const DeleteComponent = withStyles(styles)(Delete);
