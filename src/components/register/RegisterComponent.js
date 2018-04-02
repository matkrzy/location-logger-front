import React, { Component } from 'react';
import { Paper, Grid, Button, Typography, withStyles } from 'material-ui';
import { Field } from 'redux-form';
import { required, email, confirmation, length } from 'redux-form-validators';
import { Link } from 'react-router-dom';

import { routes } from '../routes';
import { TextField } from '../shared/text-field/TextField';
import { styles } from './Register.styles';

class Register extends Component {
  render() {
    const { classes, invalid, handleSubmit, dirty } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={3}>
          <Paper className={classes.wrapper}>
            <Typography variant="headline" className={classes.headline}>
              Account register
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

              <Field
                name="password"
                component={TextField}
                label="Password"
                placeholder="Enter password"
                type="password"
                validate={[required(), length({ minimum: 8 })]}
                fullWidth
              />

              <Field
                name="password_repeat"
                component={TextField}
                label="Repeat Password"
                placeholder="Repeat password"
                type="password"
                validate={[
                  required(),
                  confirmation({ field: 'password', fieldLabel: 'Password' }),
                ]}
                fullWidth
              />

              <div className={classes.member}>
                Already member? <Link to={routes.login}>Log in</Link>
              </div>

              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={invalid || !dirty}
                  fullWidth
                >
                  register
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export const RegisterComponent = withStyles(styles)(Register);
