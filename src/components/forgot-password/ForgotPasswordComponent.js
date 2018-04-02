import React, { Component } from 'react';
import { Paper, Grid, Button, Typography, withStyles } from 'material-ui';
import { Field } from 'redux-form';
import { required, email } from 'redux-form-validators';
import { Link } from 'react-router-dom';

import { routes } from '../routes';
import { TextField } from '../shared/text-field/TextField';
import { styles } from './ForgotPassword.styles';

class ForgotPassword extends Component {
  render() {
    const { classes, invalid, handleSubmit, dirty } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={3}>
          <Paper className={classes.wrapper}>
            <Typography variant="headline" className={classes.headline}>
              Password remind
            </Typography>
            <form
              noValidate="novalidate"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Field
                name="login"
                component={TextField}
                label="Login"
                placeholder="Enter login"
                fullWidth
                validate={[required(), email()]}
              />

              <div className={classes.links}>
                <Link to={routes.register}>Sign up</Link>
                <Link to={routes.login}>Log in</Link>
              </div>

              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={invalid || !dirty}
                  fullWidth
                >
                  reset password
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export const ForgotPasswordComponent = withStyles(styles)(ForgotPassword);
