import React from 'react';
import { TextField as Field } from 'material-ui';

export const TextField = ({ input, meta, ...rest }) => (
  <Field
    autoComplete="off"
    {...input}
    {...rest}
    margin={!!rest.margin ? rest.margin : 'normal'}
    error={!!(meta.touched && meta.error)}
    helperText={!!meta.error ? meta.error : <span></span>}
  />
);
