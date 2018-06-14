import { LoaderComponent } from 'components/shared/loader/Loader';
import { Wrapper } from 'components/shared/wrapper/Wrapper';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, Drawer, Typography, Icon, Avatar, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';

import { styles } from './Menu.styles';
import { routes } from '../routes';

class Menu extends Component {
  menu = () => {
    const { classes, logout } = this.props;
    const menu = [
      {
        icon: 'history',
        label: 'History',
        to: routes.tracks,
        component: NavLink,
        activeClassName: classes.active,
      },
      {
        icon: 'phonelink',
        label: 'Devices',
        to: routes.devices,
        component: NavLink,
        activeClassName: classes.active,
      },
      //{
      //  icon: 'settings',
      //  label: 'Settings',
      //  action: routes.settings.main,
      //  component: NavLink
      //  activeClassName:classes.active
      //},
      {
        icon: 'verified_user',
        label: 'Users',
        to: routes.users,
        component: NavLink,
        activeClassName: classes.active,
        visible: this.props.user.role.includes('ADMIN'),
      },
      {
        icon: 'close',
        label: 'Logout',
        component: null,
        onClick: logout,
      },
    ];

    return menu.filter(({ visible }) => (visible === undefined ? true : visible));
  };

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
        {!user ? (
          <LoaderComponent size={80} />
        ) : (
          <Wrapper>
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
              {user.username}
            </Typography>

            <List component="nav" className={classes.menu}>
              {this.menu().map(({ icon, label, visible, ...other }, i) => (
                <ListItem key={i} button className={classes.menuItem} {...other}>
                  <ListItemIcon>
                    <Icon>{icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              ))}
            </List>
          </Wrapper>
        )}
      </Drawer>
    );
  }
}

export const MenuComponent = withStyles(styles)(Menu);
