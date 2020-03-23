import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Recipients from '../pages/Recipients';

import Deliverymans from '../pages/Deliverymans';
import DeliverymanEdit from '../pages/Deliverymans/DeliverymanEdit';
import DeliverymanAdd from '../pages/Deliverymans/DeliverymanAdd';

import Deliveries from '../pages/Deliveries';
import DeliveryAdd from '../pages/Deliveries/DeliveryAdd';
import DeliveryEdit from '../pages/Deliveries/DeliveryEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/add" exact component={DeliveryAdd} isPrivate />
      <Route path="/deliveries/edit" exact component={DeliveryEdit} isPrivate />

      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route
        path="/deliverymans/edit"
        exact
        component={DeliverymanEdit}
        isPrivate
      />
      <Route
        path="/deliverymans/add"
        exact
        component={DeliverymanAdd}
        isPrivate
      />
    </Switch>
  );
}
