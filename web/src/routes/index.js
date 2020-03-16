import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Recipients from '../pages/Recipients';

import Deliverymans from '../pages/Deliverymans';

import Deliveries from '../pages/Deliveries';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/deliverymans" component={Deliverymans} isPrivate />
      <Route path="/deliveries" component={Deliveries} isPrivate />
    </Switch>
  );
}
