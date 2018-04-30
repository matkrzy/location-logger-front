import React from 'react';
import propTypes from 'prop-types';
import { withStyles, CircularProgress } from 'material-ui';

const styles = {
  loaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
};

const Loader = ({ classes, color, size, fullScreen }) => {
  const style = fullScreen ? {} : { position: 'relative' };
  return (
    <div className={classes.loaderWrapper} style={style}>
      <CircularProgress
        className={classes.progress}
        color={color}
        size={size}
      />
    </div>
  );
};

Loader.propTypes = {
  color: propTypes.string,
  size: propTypes.number,
  fullScreen: propTypes.bool
};

Loader.defaultProps = {
  color: 'primary',
  size: 50,
  fullScreen: false
};

export const LoaderComponent = withStyles(styles)(Loader);
