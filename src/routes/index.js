import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route exact path="" render={props => <Home {...props} />} />
        <Redirect to="" />
      </Switch>
    </BrowserRouter>
  );
};