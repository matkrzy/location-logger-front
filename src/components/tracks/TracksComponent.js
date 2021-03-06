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
  TextField,
  Button,
} from 'material-ui';

import { formatDate, formatDistance, formatDuration } from 'components/utils/formatters';

import { styles } from './Tracks.styles';
import { Wrapper } from '../shared/wrapper/Wrapper';
import { ActionMenuComponent } from 'components/shared/action-menu/ActionMenuComponent';
import { DialogContainer } from 'components/shared/dialog/DialogContainer';
import { DeleteContainer } from './delete/DeleteContainer';
import { routes } from 'components/routes';
import { LoaderComponent } from 'components/shared/loader/Loader';
import { ImportContainer } from 'components/tracks/import/ImportContainer';

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderBy: 'name',
      direction: 'asc',
      tracks: this.props.tracks,
      filter: '',
    };
  }

  componentWillMount() {
    this.props.fetchTracksList();
  }

  componentWillReceiveProps(nextProps) {
    const { tracks } = this.state;
    if (tracks.length !== nextProps.tracks.length) {
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

  renderRow = (track, i) => {
    const { classes } = this.props;

    return (
      <TableRow hover key={i} className={classes.row}>
        <TableCell onClick={() => this.onRowClick(track.id)}>{track.name}</TableCell>
        <TableCell onClick={() => this.onRowClick(track.id)}>{formatDate(track.date)}</TableCell>
        <TableCell onClick={() => this.onRowClick(track.id)}>{`${formatDistance(track.distance)}`}</TableCell>
        <TableCell onClick={() => this.onRowClick(track.id)}>{`${formatDuration(track.duration)}`}</TableCell>
        <TableCell numeric>
          <ActionMenuComponent options={this.options(track)} />
        </TableCell>
      </TableRow>
    );
  };

  onRowClick = id => this.props.history.push(`${routes.track}${id}`);

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

  handleChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterTrack = track => {
    const { filter } = this.state;
    const { name } = track;

    return name.toLowerCase().includes(filter.toLowerCase());
  };

  renderTable = () => {
    const { orderBy, direction, tracks, filter } = this.state;
    const { classes } = this.props;

    return (
      <Wrapper>
        <div className={classes.top}>
          <TextField
            id="filter"
            label="Find track"
            placeholder="Filter by name"
            value={filter}
            onChange={this.handleChange}
            margin="normal"
          />

          <Button
            color="primary"
            className={classes.importTrack}
            onClick={() => this.props.dialogOpen({ name: 'importTrack' })}
          >
            Import track
          </Button>
        </div>
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
              tracks.filter(track => this.filterTrack(track)).map((track, i) => this.renderRow(track, i))
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center">the list is empty</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Wrapper>
    );
  };

  render() {
    const { loading } = this.props;

    return (
      <Wrapper>
        {loading ? <LoaderComponent size={30} /> : this.renderTable()}

        <DialogContainer name="deleteTrack" component={DeleteContainer} />
        <DialogContainer name="importTrack" component={ImportContainer} />
      </Wrapper>
    );
  }
}

export const TracksComponent = withStyles(styles)(Tracks);
