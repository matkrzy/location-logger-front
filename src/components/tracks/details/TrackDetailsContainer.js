import { connect } from 'react-redux';
import findMaxBy from 'lodash/maxBy';
import findMinBy from 'lodash/minBy';
import moment from 'moment';

import { TrackDetailsComponent } from './TrackDetailsComponent';
import { points } from './randomData';
import { toggleMenu } from 'redux/menu/actions';
import { getDistance } from 'components/utils/distance';

const mapStateToProps = state => ({
  id: 1,
  name: 'Forest running',
  date: points[0].timestamp,
  distance: points.reduce((acc, val, i) => {
    if (i > 0) {
      const end = val;
      const start = points[i - 1];
      const distance = getDistance(start, end);
      return acc + distance;
    }
    
    return acc;

  }, 0).toFixed(2),
  duration: moment.utc(moment(points[points.length - 1].timestamp).diff(moment(points[0].timestamp))).format(
    "HH:mm:ss"),
  startTime: points[0].timestamp,
  endTime: points[points.length - 1].timestamp,
  maxSpeed: findMaxBy(points, point => point.speed).speed,
  avgSpeed: (points.reduce((acc, val) => acc + val.speed, 0) / points.length
  ).toFixed(2),
  minSpeed: findMinBy(points.filter(item => !!item.speed), point => point.speed)
    .speed,
  maxAltitude: findMaxBy(points, point => point.altitude).altitude,
  avgAltitude: (points.reduce((acc, val) => acc + val.altitude, 0) /
    points.length
  ).toFixed(2),
  minAltitude: findMinBy(
    points.filter(item => !!item.altitude),
    point => point.altitude,
  ).altitude,
  removed: false,
  points: points.map(point => {

    const start = moment(points[0].timestamp);
    const then = moment(point.timestamp);
    const diff = moment.utc(then.diff(start)).format("mm:ss").split(":");

    return {
      ...point,
      duration: `${diff[0]}m:${diff[1]}s`
    }

  })
});

const mapDispatchToProps = {toggleMenu};

export const TrackDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackDetailsComponent);
