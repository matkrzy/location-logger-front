import React, { Component } from 'react';
import {
  withStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableSortLabel,
} from 'material-ui';

import { styles } from './Tracks.styles';
import { Wrapper } from '../shared/wrapper/Wrapper';
import { ActionMenuComponent } from 'components/shared/action-menu/ActionMenuComponent';
import { DialogContainer } from 'components/shared/dialog/DialogContainer';
import { DeleteContainer } from './delete/DeleteContainer';

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderBy: 'name',
      direction: 'asc',
      tracks: this.props.tracks,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { tracks } = this.state;
    if (!tracks) {
      this.setState({ tracks: nextProps.tracks });
    }
  }

  options = data => {
    const { dialogOpen } = this.props;

    return [
      {
        label: 'delete',
        onClick: () => dialogOpen({ name: 'deleteTrack', params: { ...data } }),
      },
    ];
  };

  onRowClick = id => console.log('show track by id:', id);

  renderRow = (track, i) => {
    const { classes } = this.props;

    return (
      <TableRow hover key={i} className={classes.row}>
        <TableCell onClick={() => this.onRowClick(track.id)}>
          {track.name}
        </TableCell>
        <TableCell onClick={() => this.onRowClick(track.id)}>
          {track.date}
        </TableCell>
        <TableCell
          onClick={() => this.onRowClick(track.id)}
        >{`${track.distance}km`}</TableCell>
        <TableCell
          onClick={() => this.onRowClick(track.id)}
        >{`${track.time}h`}</TableCell>
        <TableCell numeric>
          <ActionMenuComponent options={this.options(track)} />
        </TableCell>
      </TableRow>
    );
  };

  onSortClick = columnName => {
    const { orderBy, direction } = this.state;

    if (columnName !== orderBy) {
      this.setState({ orderBy: columnName, direction: 'asc' }, this.sortTracks);
    } else {
      switch (direction) {
        case 'asc':
          this.setState({ direction: 'desc' }, this.sortTracks);
          break;
        case 'desc':
          this.setState({ direction: 'asc' }, this.sortTracks);
          break;
        default:
          return null;
      }
    }
  };

  sortTracks = () => {
    const { orderBy, direction, tracks } = this.state;

    direction === 'desc'
      ? tracks.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
      : tracks.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ tracks });
  };

  render() {
    const { orderBy, direction, tracks } = this.state;

    return (
      <Wrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={direction}
                  onClick={() => this.onSortClick('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={direction}
                  onClick={() => this.onSortClick('date')}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'distance'}
                  direction={direction}
                  onClick={() => this.onSortClick('distance')}
                >
                  Distance
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'duration'}
                  direction={direction}
                  onClick={() => this.onSortClick('duration')}
                >
                  Duration
                </TableSortLabel>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {!!tracks.length ? (
              tracks.map((track, i) => this.renderRow(track, i))
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center">the list is empty</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <DialogContainer name="deleteTrack" component={DeleteContainer} />
      </Wrapper>
    );
  }
}

export const TracksComponent = withStyles(styles)(Tracks);
