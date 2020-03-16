import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import RecipientList from '../pages/RecipientList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/recipients" component={RecipientList} isPrivate />
    </Switch>
  );
}
