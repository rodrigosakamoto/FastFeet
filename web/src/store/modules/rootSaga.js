import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import delivery from './delivery/sagas';
import deliveryman from './deliveryman/sagas';
import recipient from './recipient/sagas';
import problem from './problem/sagas';

export default function* rootSaga() {
  return yield all([auth, user, delivery, deliveryman, recipient, problem]);
}
