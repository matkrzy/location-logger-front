import { LoaderComponent } from 'components/shared/loader/Loader';
import React, { Component } from 'react';
import { withStyles, RadioGroup, Radio, FormControlLabel, Typography } from 'material-ui';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

import moment from 'moment';

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
      const { payload, label } = props;
      const { lat, lng, ...other } = payload[0].payload;
      const { chartData } = this.state;

      if (this.map) {
        this.map.setMapPoint({ lat, lng });
      }

      return (
        <div className={classes.tooltip}>
          <div className={classes.tooltipRow}>
            <span>time:</span> <span>{label}(h)</span>
          </div>
          <div className={classes.tooltipRow}>
            <span>{`${chartData}`}:</span>
            <span>{`${other[chartData]}(${chartData === 'speed' ? 'km/h' : 'm'})`}</span>
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
          <DetailsColumn
            label="Date"
            value={moment(date)
              .format('DD/MM/YYYY')
              .toString()}
          />
          <DetailsColumn label="Distance (km)" value={parseFloat((!!distance ? distance : 0.0) / 1000).toFixed(2)} />
          <DetailsColumn label="Duration (h)" value={this.formatDuration(duration)} />
          <DetailsColumn
            label="Start time"
            value={moment(startTime)
              .format('HH:mm:ss')
              .toString()}
          />
          <DetailsColumn
            label="End time"
            value={moment(endTime)
              .format('HH:mm:ss')
              .toString()}
          />
          <DetailsColumn label="Max. speed (km/h)" value={`${!!maxSpeed ? maxSpeed.toFixed(2) : '-'}`} />
          <DetailsColumn label="Avg. speed (km/h)" value={`${!!avgSpeed ? avgSpeed.toFixed(2) : '-'}`} />
          <DetailsColumn label="Min. speed (km/h)" value={`${!!minSpeed ? minSpeed.toFixed(2) : '-'}`} />
          <DetailsColumn label="Max. altitude (m)" value={`${!!maxAltitude ? maxAltitude.toFixed(2) : '-'}`} />
          <DetailsColumn label="Avg. altitude (m)" value={`${!!avgAltitude ? avgAltitude.toFixed(2) : '-'}`} />
          <DetailsColumn label="Min. altitude (m)" value={`${!!minAltitude ? minAltitude.toFixed(2) : '-'}`} />
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
