import { takeEvery, fork, put } from 'redux-saga/effects';

import {
  DEVICE_ADD_SUCCESS,
  DEVICE_REMOVE_SUCCESS,
  DEVICE_UPDATE_SUCCESS,
} from './action-types';
import { fetchDevices } from './actions';
import { dialogClose } from '../dialog/actions';

function* afterDeviceAdd() {
  yield put(dialogClose({ name: 'addDevice' }));
  yield put(dialogClose({ name: 'deleteDevice' }));
  yield put(dialogClose({ name: 'editDevice' }));
  yield put(fetchDevices());
}

export function* devicesSaga() {
  yield fork(
    takeEvery,
    [DEVICE_ADD_SUCCESS, DEVICE_REMOVE_SUCCESS, DEVICE_UPDATE_SUCCESS],
    afterDeviceAdd,
  );
}
