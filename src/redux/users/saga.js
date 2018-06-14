import { fork, takeEvery, put } from 'redux-saga/effects';

import { USERS_UPDATE_SUCCESS, USERS_DELETE_SUCCESS, USERS_DELETE_FAILURE } from './action-types';
import { fetchAllUsers } from './actions';
import { dialogClose } from '../dialog/actions';

function* afterUserDelete() {
  yield put(dialogClose({ name: 'deleteUser' }));
  yield put(fetchAllUsers());
}

function* afterUserUpdate() {
  yield put(fetchAllUsers());
}

export function* usersSaga() {
  yield fork(takeEvery, [USERS_UPDATE_SUCCESS], afterUserUpdate);
  yield fork(takeEvery, [USERS_DELETE_SUCCESS, USERS_DELETE_FAILURE], afterUserDelete);
}
