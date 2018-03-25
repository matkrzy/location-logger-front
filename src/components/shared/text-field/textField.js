import React from 'react';
import { TextField } from 'material-ui';

export const textField = ({ input, meta, ...rest }) => (
  <TextField
    autoComplete="off"
    {...input}
    {...rest}
    margin={!!rest.margin ? rest.margin : 'normal'}
    error={!!(meta.touched && meta.error)}
    helperText={!!meta.error ? meta.error : <span></span>}
  />
);
