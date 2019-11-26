import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Login } from "./Login";
import { SignUp } from "./Signup";
import { ForgotPassword } from "./ForgotPassword";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}));

export default function AuthPage() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Switch>
        <Redirect from="/auth" exact to="/auth/Login" />
        <Route path="/auth/Login" component={Login} />
        <Route path="/auth/Signup" component={SignUp} />
        <Route path="/auth/ForgotPassword" component={ForgotPassword} />
      </Switch>
    </Grid>
  );
}

export { AuthPage };
