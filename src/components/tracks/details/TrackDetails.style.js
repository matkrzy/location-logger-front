export const styles = theme => ({
  detailsPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing.unit * 2,
  },
  chart: {
    margin: `${theme.spacing.unit * 3}px 0 0`,
  },
  chartSelector: {
    display: 'flex',
    flexDirection: 'row',
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: theme.spacing.unit,
  },
  tooltipRow: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > span:nth-of-type(1)': {
      paddingRight: theme.spacing.unit,
    },
  },
  emptyPoints: {
    margin: theme.spacing.unit * 3,
  },
});
