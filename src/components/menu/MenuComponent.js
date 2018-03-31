import React, { Component } from 'react';
import {
  withStyles,
  Drawer,
  Typography,
  Icon,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui';

import { styles } from './Menu.styles';
import { routes } from '../routes';

class Menu extends Component {
  menu = [
    { icon: 'history', label: 'History', action: () => console.log('history') },
    {
      icon: 'phonelink',
      label: 'Devices',
      action: () => console.log('devices'),
    },
    {
      icon: 'settings',
      label: 'Settings',
      action: () => console.log('settings'),
    },
    {
      icon: 'close',
      label: 'Logout',
      action: () => this.props.history.push(routes.login),
    },
  ];

  render() {
    const { classes, user, open } = this.props;

    return (
      <Drawer
        anchor="right"
        variant="persistent"
        open={open}
        className={classes.drawer}
        PaperProps={{
          classes: { root: classes.paper },
        }}
      >
        <div className={classes.logo}>
          <Icon className={classes.place}>place</Icon>
          <Icon className={classes.terrain}>terrain</Icon>
          <Typography className={classes.title} align="center">
            Location Tracker
          </Typography>
        </div>

        <Avatar className={classes.avatar}>
          <Icon>person</Icon>
        </Avatar>
        <Typography align="center" className={classes.email}>
          {user.email}
        </Typography>

        <List component="nav" className={classes.menu}>
          {this.menu.map((item, i) => (
            <ListItem
              button
              key={i}
              onClick={item.action}
              className={classes.menuItem}
            >
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export const MenuComponent = withStyles(styles)(Menu);
