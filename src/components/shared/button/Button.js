import React from 'react';
import { Button, CircularProgress } from 'material-ui';

export const ButtonLoader = ({
  loading,
  children,
  label,
  loaderSize,
  ...props
}) => {
  return (
    <Button {...props}>
      {loading ? <CircularProgress size={loaderSize} color="secondary"/> : <span>{label}</span>}
    </Button>
  );
};

ButtonLoader.defaultProps = {
  loaderSize: 14,
};
