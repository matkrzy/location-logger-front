import { DialogContainer } from 'components/shared/dialog/DialogContainer';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import React, { Component } from 'react';

import { UsersListComponent } from './list/UsersListComponent';
import { DeleteContainer } from './delete/DeleteContainer';

export class UsersComponent extends Component {
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { user } = this.props;

    if (!!user) {
      if (user.role.includes('ADMIN')) {
        this.props.fetchAllUsers();
      } else {
        this.props.history.push('/');
      }
    }
  };

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { list } = this.props;
    if (!list.length) this.fetchUsers();
  }

  render() {
    const { list, loading, updateUser, dialogOpen } = this.props;
    return (
      <Wrapper>
        <UsersListComponent list={list} updateUser={updateUser} loading={loading} dialogOpen={dialogOpen} />
        <DialogContainer name="deleteUser" component={DeleteContainer} />
      </Wrapper>
    );
  }
}
