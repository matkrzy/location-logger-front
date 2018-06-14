import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Switch, withStyles, Typography } from 'material-ui';

import { ActionMenuComponent } from 'components/shared/action-menu/ActionMenuComponent';
import { styles } from './UserList.styles';

export class UsersList extends Component {
  updateUser = user => event => {
    this.props.updateUser({ ...user, active: event.target.checked });
  };

  options = user => [
    {
      label: 'delete',
      onClick: () => this.props.dialogOpen({ name: 'deleteUser', params: user }),
    },
  ];

  row = user => {
    return (
      <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell className={this.props.classes.username}>{user.username}</TableCell>
        <TableCell numeric className={this.props.classes.active}>
          <Switch
            checked={user.active}
            color="primary"
            onChange={this.updateUser(user)}
            disabled={this.props.loading}
          />
        </TableCell>
        <TableCell numeric>
          <ActionMenuComponent options={this.options(user)} />
        </TableCell>
      </TableRow>
    );
  };

  emptyList = (
    <TableRow>
      <TableCell colSpan={5}>
        <Typography align="center">the list is empty</Typography>
      </TableCell>
    </TableRow>
  );

  render() {
    const { list, classes } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Username</TableCell>
            <TableCell className={classes.active} numeric>
              Active
            </TableCell>
            <TableCell numeric />
          </TableRow>
        </TableHead>
        <TableBody>{!!list.length ? list.map(this.row) : this.emptyList}</TableBody>
      </Table>
    );
  }
}

export const UsersListComponent = withStyles(styles)(UsersList);
