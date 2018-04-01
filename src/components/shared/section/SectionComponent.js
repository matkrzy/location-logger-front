import React, { Component } from 'react';
import { withStyles, Typography } from 'material-ui';
import classnames from 'classnames';

import { styles } from './Section.styles';

class Section extends Component {
  render() {
    const { classes, title, menu } = this.props;
    return (
      <section
        className={classnames(classes.section, {
          [classes.withMenu]: menu.isOpen,
        })}
      >
        <Typography variant="title" className={classes.title}>
          {title}
        </Typography>
        {this.props.children}
      </section>
    );
  }
}

export const SectionComponent = withStyles(styles)(Section);
