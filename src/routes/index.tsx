import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import Company from '../pages/Company';
import CompanyRegister from '../pages/CompanyRegister';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/companies" component={Company} isPrivate />
      <Route path="/companies/register" component={CompanyRegister} isPrivate />
    </Switch>
  );
}
