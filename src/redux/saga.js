import { fork } from 'redux-saga/effects';

import { authSaga } from './auth/saga';
import { trackSaga } from './track/saga';
import { devicesSaga } from './devices/saga';
import { tracksSaga } from './tracks/saga';
import { usersSaga } from './users/saga';

export function* saga() {
  yield fork(authSaga);
  yield fork(trackSaga);
  yield fork(devicesSaga);
  yield fork(tracksSaga);
  yield fork(usersSaga);
}
