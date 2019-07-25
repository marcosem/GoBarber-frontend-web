import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Autentication routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Routes that need login
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
