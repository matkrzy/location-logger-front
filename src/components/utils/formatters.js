import moment from 'moment';

export const formatDuration = milis => {
  if (!milis) {
    return '-';
  }

  const duration = moment.duration(milis, 'seconds');
  return (
    moment
      .utc(duration.as('milliseconds'))
      .format('HH:mm:ss')
      .toString() + 'h'
  );
};

export const formatDate = date => moment(date).format('DD/MM/YYYY');

export const formatTime = time =>
  moment(time)
    .format('HH:mm:ss')
    .toString() + 'h';

export const formatDistance = distance => {
  if (!distance) {
    return '-';
  }

  distance = Math.round((distance / 1000) * 100) / 100;
  return parseFloat(distance).toFixed(2) + 'km';
};

export const formatSpeed = speed => (!!speed ? speed.toFixed(2) + 'km/h' : '-');

export const formatAltitude = altitude => (!!altitude ? altitude.toFixed(2) + 'm' : '-');
