import React, { Component } from 'react';
import { IconButton, Menu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { Wrapper } from '../wrapper/Wrapper';

export class ActionMenuComponent extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = onClick => {
    typeof onClick === 'function' && onClick();
    this.setState({ anchorEl: null });
  };

  render() {
    const { options } = this.props;
    const { anchorEl } = this.state;

    return (
      <Wrapper>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              onClick={() => this.handleClose(option.onClick)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Wrapper>
    );
  }
}
