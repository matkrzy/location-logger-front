import React, { Component } from 'react';
import { withStyles, Dialog as MaterialDialog } from 'material-ui';
import propTypes from 'prop-types';

import { styles } from './Dialog.styles';

class Dialog extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    component: propTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: null,
      render: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen, render: true });
    }

    if (this.state.isOpen !== nextProps.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  componentWillMount() {
    this.props.dialogRegister({ name: this.props.name });
  }

  componentWillUnmount() {
    this.props.dialogDestroy({ name: this.props.name });
  }

  closeRequest = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { component: Component, name, params } = this.props;
    const { isOpen, render } = this.state;

    if (!render) {
      return false;
    }

    return (
      <MaterialDialog
        open={isOpen}
        onClose={this.closeRequest}
        onExited={() => this.props.dialogClose({ name })}
      >
        <Component dialogClose={this.closeRequest} {...params}/>
      </MaterialDialog>
    );
  }
}

export const DialogComponent = withStyles(styles)(Dialog);
