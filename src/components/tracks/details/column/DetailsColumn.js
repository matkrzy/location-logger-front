import React from 'react';
import { withStyles, Typography } from 'material-ui';
import propTypes from 'prop-types';

import { styles } from './DetailsColumn.styles';

const column = ({ classes, value, label, style }) => (
  <div style={style} className={classes.wrapper}>
    <Typography variant="caption" className={classes.label}>
      {label}
    </Typography>
    <Typography>{value}</Typography>
  </div>
);

column.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

column.defaultProps = {
  style: { minWidth: 150 },
};

export const DetailsColumn = withStyles(styles)(column);
