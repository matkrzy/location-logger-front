import React, { Component } from 'react';
import { withStyles, Typography, Icon } from 'material-ui';
import classnames from 'classnames';

import { styles } from './Section.styles';

class Section extends Component {
  backTo = route => this.props.history.push(route);

  render() {
    const { classes, title, menu, backLink } = this.props;
    return (
      <section
        className={classnames(classes.section, {
          [classes.withMenu]: menu.isOpen,
        })}
      >
        <Typography
          variant="title"
          className={classnames(classes.title, {
            [classes.backLink]: !!backLink,
          })}
          onClick={() => this.backTo(backLink)}
        >
          {!!backLink && <Icon>arrow_back</Icon>}
          {title}
        </Typography>
        {this.props.children}
      </section>
    );
  }
}

export const SectionComponent = withStyles(styles)(Section);
