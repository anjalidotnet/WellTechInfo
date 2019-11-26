import React from "react";
import { AuthPage } from "./components/Authentication/AuthPage";
import { NotFound } from "./components/Global/Notfound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path="/auth" component={AuthPage} />
        <Route path="*" component = {NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
