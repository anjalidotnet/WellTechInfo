import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Copyright } from '../Global/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import { authService } from '../../services/authService';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    borderColor: '#f73772',
  }
}));

const handleClick = (event,setError) => {
  event.preventDefault();
  // form is invalid!
  if (!event.target.checkValidity()) {
   //setError(true);
    debugger
  } else {
    //else submit form
    const data = new FormData(event.target);
    data.set('email', data.get('email').toUpperCase());
    let user = data.get('email');
    let password = data.get('password');
    authService.login(user,password)
      .then(function (response) {
        console('successfull login');
      });
    debugger
  }
}


export default function Login() {
  const classes = useStyles();
  if(authService.currentUserValue) {
    //history.push('/');
  }
  //const [error, setError] = useState(false);

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
          </Typography>
          
        <form className={classes.form} onSubmit={(e) => handleClick(e)} noValidate>
        {/* <button onClick={() => setError(error)}> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
            </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/ForgotPassword" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/Signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  );
}

export { Login };