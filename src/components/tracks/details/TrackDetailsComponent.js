import React, { Component } from 'react';
import { withStyles, RadioGroup, Radio, FormControlLabel } from 'material-ui';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';

import { styles } from './TrackDetails.style';
import { Wrapper } from '../../shared/wrapper/Wrapper';
import { MapComponent } from 'components/shared/map/MapComponent';
import { DetailsColumn } from './column/DetailsColumn';

class TrackDetails extends Component {
  state = {
    chartData: 'speed',
  };

  handleChange = event => {
    this.setState({ chartData: event.target.value });
  };

  formatDuration = milis => {
    const duration = moment.duration(milis, 'seconds');
    return moment
      .utc(duration.as('milliseconds'))
      .format('HH:mm:ss')
      .toString();
  };

  render() {
    const {
      classes,
      name,
      date,
      distance,
      duration,
      startTime,
      endTime,
      maxSpeed,
      avgSpeed,
      minSpeed,
      maxAltitude,
      avgAltitude,
      minAltitude,
      points,
    } = this.props;

    const { chartData } = this.state;

    return (
      <Wrapper>
        <MapComponent points={points} />
        <div className={classes.detailsPanel}>
          <DetailsColumn label="Name" value={name} />
          <DetailsColumn label="Date" value={moment(date).format("DD/MM/YYYY").toString()} />
          <DetailsColumn label="Distance (km)" value={`${distance}`} />
          <DetailsColumn
            label="Duration (h)"
            value={this.formatDuration(duration)}
          />
          <DetailsColumn label="Start time" value={moment(startTime).format("HH:MM:SS").toString()} />
          <DetailsColumn label="End time" value={moment(endTime).format("HH:MM:SS").toString()} />
          <DetailsColumn label="Max. speed (km/h)" value={`${maxSpeed}`} />
          <DetailsColumn label="Avg. speed (km/h)" value={`${avgSpeed}`} />
          <DetailsColumn label="Min. speed (km/h)" value={`${minSpeed}`} />
          <DetailsColumn label="Max. altitude (m)" value={`${maxAltitude}`} />
          <DetailsColumn label="Avg. altitude (m)" value={`${avgAltitude}`} />
          <DetailsColumn label="Min. altitude (m)" value={`${minAltitude}`} />
        </div>

        <RadioGroup
          aria-label="gender"
          name="chartData"
          className={classes.chartSelector}
          value={chartData}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="speed"
            control={<Radio color="primary" />}
            label="Speed"
          />
          <FormControlLabel
            value="altitude"
            control={<Radio color="primary" />}
            label="Altitude"
          />
        </RadioGroup>
        <div className={classes.chart}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={points}>
              <XAxis dataKey="timestamp" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={chartData}
                stroke="#3f51b5"
                fill="#3f51b5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Wrapper>
    );
  }
}

export const TrackDetailsComponent = withStyles(styles)(TrackDetails);
