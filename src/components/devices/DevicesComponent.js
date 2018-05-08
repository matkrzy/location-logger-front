import React, { Component } from 'react';
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Typography,
} from 'material-ui';

import { styles } from './Devices.styles';
import { ActionMenuComponent } from 'components/shared/action-menu/ActionMenuComponent';
import { DialogContainer } from 'components/shared/dialog/DialogContainer';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import { DeleteContainer } from './delete/DeleteContainer';
import { AddContainer } from './add/AddContainer';
import { DetailsContainer } from './details/DetailsContainer';
import { LoaderComponent } from 'components/shared/loader/Loader';
import { EditContainer } from './edit/EditContainer';

class Devices extends Component {
  state = {
    filter: '',
  };

  componentWillMount() {
    this.props.fetchDevices();
  }

  options = data => {
    const { dialogOpen } = this.props;

    return [
      {
        label: 'edit',
        onClick: () => dialogOpen({ name: 'editDevice', params: { ...data } }),
      },
      {
        label: 'delete',
        onClick: () =>
          dialogOpen({ name: 'deleteDevice', params: { ...data } }),
      },
    ];
  };

  handleChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  openDetails = device => {
    const { dialogOpen } = this.props;
    dialogOpen({ name: 'detailsDevice', params: { ...device } });
  };

  render() {
    const { classes, items, loading } = this.props;
    const { filter } = this.state;

    if (loading) {
      return <LoaderComponent size={30} />;
    }

    return (
      <Wrapper>
        <div className={classes.top}>
          <TextField
            id="filter"
            label="Find device"
            placeholder="Filter by name"
            value={filter}
            onChange={this.handleChange}
            margin="normal"
          />

          <Button
            color="primary"
            variant="raised"
            className={classes.addDevice}
            onClick={() => this.props.dialogOpen({ name: 'addDevice' })}
          >
            Add device
          </Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Device token</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {!!items && !!items.length ? (
              items
                .filter(device =>
                  device.name.toUpperCase().includes(filter.toUpperCase()),
                )
                .map(device => {
                  return (
                    <TableRow key={device.id}>
                      <TableCell onClick={() => this.openDetails(device)}>
                        {device.name}
                      </TableCell>
                      <TableCell onClick={() => this.openDetails(device)}>
                        {device.uuid}
                      </TableCell>
                      <TableCell numeric>
                        <ActionMenuComponent options={this.options(device)} />
                      </TableCell>
                    </TableRow>
                  );
                })
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center">the list is empty</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <DialogContainer name="deleteDevice" component={DeleteContainer} />
        <DialogContainer name="addDevice" component={AddContainer} />
        <DialogContainer name="detailsDevice" component={DetailsContainer} />
        <DialogContainer name="editDevice" component={EditContainer} />
      </Wrapper>
    );
  }
}

export const DevicesComponent = withStyles(styles)(Devices);
