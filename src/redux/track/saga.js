import { fork, takeEvery, put } from 'redux-saga/effects';

import { TRACK_DELETE_SUCCESS } from './action-types';
import { fetchTracksList } from '../tracks/actions';

function* afterTrackDeletion() {
  yield put(fetchTracksList());
}

export function* trackSaga() {
  yield fork(takeEvery, [TRACK_DELETE_SUCCESS], afterTrackDeletion);
}
