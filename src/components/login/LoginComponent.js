import React, { Component } from 'react';
import { Paper, Grid, Button, Typography, withStyles } from 'material-ui';
import { Field } from 'redux-form';
import { required, email } from 'redux-form-validators';
import { Link } from 'react-router-dom';

import { routes } from '../routes';
import { textField } from '../shared/text-field/textField';
import { styles } from './Login.styles';

class Login extends Component {
  render() {
    const { classes, invalid, handleSubmit, dirty } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={3}>
          <Paper className={classes.wrapper}>
            <Typography variant="headline" className={classes.headline}>
              Account login
            </Typography>
            <form
              noValidate="novalidate"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Field
                name="login"
                component={textField}
                label="Login"
                placeholder="Enter login"
                fullWidth
                validate={[required(), email()]}
              />

              <Field
                name="password"
                component={textField}
                label="Password"
                placeholder="Enter password"
                type="password"
                validate={[required()]}
                fullWidth
              />
              <Link
                to={routes.forgotPassword}
                className={classes.forgotPassword}
              >
                Forgot password?
              </Link>

              <div className={classes.notMember}>
                Don't have an account? <Link to={routes.register}>Sign up</Link>
              </div>

              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={invalid || !dirty}
                  fullWidth
                >
                  login
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export const LoginComponent = withStyles(styles)(Login);
