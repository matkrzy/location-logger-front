import React, { Component } from 'react';
import {
  withStyles,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from 'material-ui';

import { styles } from './Details.styles';
import { Wrapper } from 'components/shared/wrapper/Wrapper';

class Details extends Component {
  onConfirmClick = () => this.props.dialogClose();

  render() {
    const { name, uuid } = this.props;

    return (
      <Wrapper>
        <DialogTitle>Device details</DialogTitle>
        <DialogContent>
          <Typography variant="caption">Name</Typography>
          <Typography gutterBottom={true}>{name}</Typography>

          <Typography variant="caption">Token</Typography>
          <Typography gutterBottom={true}>{uuid}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onConfirmClick} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Wrapper>
    );
  }
}

export const DetailsComponent = withStyles(styles)(Details);
