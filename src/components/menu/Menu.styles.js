import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';

export const styles = theme => ({
  drawer: {
    color: '#fff',
  },
  paper: {
    width: 300,
    backgroundColor: blue[500],
    color: grey[50],
    padding: theme.spacing.unit * 2,
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  logo: {
    color: '#fff',
    position: 'relative',
    textAling: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  place: {
    fontSize: 74,
  },
  terrain: {
    position: 'absolute',
    marginLeft: -19,
    marginTop: 42,
    fontSize: '43px',
  },
  avatar: {
    backgroundColor: '#fff',
    color: blue[500],
    margin: '10px auto 10px auto',
    width: 80,
    height: 80,
    '& span': {
      fontSize: 40,
    },
  },
  email: {
    color: '#fff',
  },
  menu: {
    marginTop: 40,
  },
  menuItem: {
    color: '#fff',
    '&  *': {
      color: '#fff',
    },
  },
  active: {
    backgroundColor: theme.palette.action.hover,
  },
});
