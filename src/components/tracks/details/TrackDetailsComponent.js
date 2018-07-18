import { LoaderComponent } from 'components/shared/loader/Loader';
import React, { Component } from 'react';
import { withStyles, RadioGroup, Radio, FormControlLabel, Typography } from 'material-ui';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

import {
  formatDate,
  formatDistance,
  formatDuration,
  formatTime,
  formatSpeed,
  formatAltitude,
} from 'components/utils/formatters';

import { styles } from './TrackDetails.style';
import { Wrapper } from '../../shared/wrapper/Wrapper';
import { MapComponent } from 'components/shared/map/MapComponent';
import { DetailsColumn } from './column/DetailsColumn';

class TrackDetails extends Component {
  state = {
    chartData: 'speed',
  };

  updateMapPoint = props => {
    const { active } = props;
    const { classes } = this.props;

    if (active) {
      const { payload } = props;
      const { lat, lng, duration, ...other } = payload[0].payload;
      const { chartData } = this.state;

      if (this.map) {
        this.map.setMapPoint({ lat, lng });
      }

      return (
        <div className={classes.tooltip}>
          <div className={classes.tooltipRow}>
            <span>time:</span> <span>{formatDuration(duration)}</span>
          </div>
          <div className={classes.tooltipRow}>
            <span>{`${chartData}`}:</span>
            <span>{chartData === 'speed' ? formatSpeed(other[chartData]) : formatAltitude(other[chartData])}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  componentWillMount() {
    this.props.toggleMenu();

    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.fetchTrackDetails(id);
  }

  componentWillUnmount() {
    this.props.toggleMenu();
  }

  handleChange = event => {
    this.setState({ chartData: event.target.value });
  };

  render() {
    const {
      classes,
      details: {
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
      },
      loading,
    } = this.props;

    const { chartData } = this.state;
    const chartFillColor = chartData === 'speed' ? '#3f51b5' : '#009688';
    const chartStrokeColor = chartData === 'speed' ? '#3f51b5' : '#009688';
    const chartMin = chartData === 'speed' ? minSpeed : minAltitude;
    const chartMax = chartData === 'speed' ? maxSpeed : maxAltitude;

    if (loading) return <LoaderComponent />;

    if (this.mapPoint == null) this.mapPoint = points[0];

    return (
      <Wrapper>
        <MapComponent points={points} ref={map => (map !== null ? (this.map = map) : null)} />
        <div className={classes.detailsPanel}>
          {!!name && <DetailsColumn label="Name" value={name} />}
          <DetailsColumn label="Date" value={formatDate(date)} />
          <DetailsColumn label="Distance (km)" value={formatDistance(distance)} />
          <DetailsColumn label="Duration (h)" value={formatDuration(duration)} />
          <DetailsColumn label="Start time" value={formatTime(startTime)} />
          <DetailsColumn label="End time" value={formatTime(endTime)} />
          <DetailsColumn label="Max. speed (km/h)" value={formatSpeed(maxSpeed)} />
          <DetailsColumn label="Avg. speed (km/h)" value={formatSpeed(avgSpeed)} />
          <DetailsColumn label="Min. speed (km/h)" value={formatSpeed(minSpeed)} />
          <DetailsColumn label="Max. altitude (m)" value={formatAltitude(maxAltitude)} />
          <DetailsColumn label="Avg. altitude (m)" value={formatAltitude(avgAltitude)} />
          <DetailsColumn label="Min. altitude (m)" value={formatAltitude(minAltitude)} />
        </div>

        {!!points && !!points.length ? (
          <Wrapper>
            <RadioGroup
              aria-label="gender"
              name="chartData"
              className={classes.chartSelector}
              value={chartData}
              onChange={this.handleChange}
            >
              <FormControlLabel value="speed" control={<Radio color="primary" />} label="Speed" />
              <FormControlLabel value="altitude" control={<Radio color="primary" />} label="Altitude" />
            </RadioGroup>
            <div className={classes.chart}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={points}>
                  <XAxis dataKey="duration" />
                  <YAxis type="number" domain={[chartMin, Math.round(chartMax) + 2]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={this.updateMapPoint} />
                  <Area type="monotone" dataKey={chartData} stroke={chartStrokeColor} fill={chartFillColor} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Wrapper>
        ) : (
          <Typography className={classes.emptyPoints} align="center">
            Track doesn't have any GPS data
          </Typography>
        )}
      </Wrapper>
    );
  }
}

export const TrackDetailsComponent = withStyles(styles)(TrackDetails);
