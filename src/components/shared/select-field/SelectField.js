import React from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

export const SelectField = ({
  input,
  meta: { touched, error },
  label,
  items,
  valueProp,
  renderLabel,
  className,
  fullWidth,
  helperText,
  helperTextClassName,
  ...other
}) => {
  return (
    <FormControl
      className={className}
      fullWidth={fullWidth}
      error={!!error && touched}
    >
      {!!label && <InputLabel>{label}</InputLabel>}
      <Select {...other} {...input} input={<Input />}>
        {items.map((o, i) => (
          <MenuItem
            disabled={o.disabled}
            key={i}
            value={o[valueProp || 'id'] || o}
          >
            {renderLabel(o)}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className={helperTextClassName}>
        {touched && error ? error : helperText}
      </FormHelperText>
    </FormControl>
  );
};

SelectField.defaultProps = {
  renderLabel: x => x,
};
