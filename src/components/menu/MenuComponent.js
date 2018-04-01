import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    {
      icon: 'history',
      label: 'History',
      action: routes.tracks,
    },
    {
      icon: 'phonelink',
      label: 'Devices',
      action: routes.devices,
    },
    {
      icon: 'settings',
      label: 'Settings',
      action: routes.settings.main,
    },
    {
      icon: 'close',
      label: 'Logout',
      action: routes.logout,
    },
  ];

  render() {
    const { classes, user, isOpen } = this.props;

    return (
      <Drawer
        anchor="right"
        variant="persistent"
        open={isOpen}
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
              key={i}
              button
              component={NavLink}
              activeClassName={classes.active}
              className={classes.menuItem}
              to={item.action}
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
