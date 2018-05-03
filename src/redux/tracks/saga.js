import { fork, takeEvery, put } from 'redux-saga/effects';

import { TRACK_IMPORT_SUCCESS } from './action-types';
import { fetchTracksList } from './actions';
import { dialogClose } from '../dialog/actions';

function* afterTrackImport() {
  yield put(dialogClose({ name: 'importTrack' }));
  yield put(fetchTracksList());
}

export function* tracksSaga() {
  yield fork(takeEvery, [TRACK_IMPORT_SUCCESS], afterTrackImport);
}
