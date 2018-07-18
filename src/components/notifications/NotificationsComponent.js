import React, { Component } from 'react';

import { Snackbar } from 'material-ui';

export class NotificationsComponent extends Component {
  state = {
    message: null,
    isOpen: false,
  };

  handleExited = () => {
    this.setState({ message: null }, () => this.queue());
  };

  handleClose = (event, reason) => {
    this.props.notificationTake();
    this.setState({ isOpen: false });
  };

  componentDidMount() {
    this.queue();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { message } = this.state;
    const { notifications } = this.props;

    if (!message && !!notifications.length) {
      this.queue();
    }
  }

  queue = () => {
    const { message } = this.state;
    const { notifications } = this.props;

    if (!!notifications.length && !message) {
      const { message } = notifications[0];
      this.setState({ message: message, isOpen: true });
    }
  };

  render() {
    const { isOpen, message } = this.state;

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpen}
        message={<span>{message}</span>}
        onClose={this.handleClose}
        onExited={this.handleExited}
      />
    );
  }
}
