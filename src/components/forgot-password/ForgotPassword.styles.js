export const styles = theme => ({
  wrapper: {
    padding: 4 * theme.spacing.unit,
    margin: '50px 0',
  },
  headline: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  buttons: {
    marginTop: 20,
  },
  links: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    '& > *': {
      margin: '0 8px',
    },
  },
  forgotPassword: {
    fontSize: 12,
  },
});
