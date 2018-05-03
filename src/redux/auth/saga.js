import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from './action-types';

const tokenName = process.env.REACT_APP_AUTH_TOKEN_NAME;

const saveToken = token => localStorage.setItem(tokenName, token);
const removeToken = () => localStorage.removeItem(tokenName);

function* afterRegister() {
  yield put(push('/login'));
}

function* authSuccess({ payload: { token } }) {
  if (token) {
    yield call(saveToken, token);
    yield put(push('/tracks'));
  }
}

function* logout() {
  yield call(removeToken);
  yield put(push('/login'));
}

export function* authSaga() {
  yield fork(takeEvery, [USER_LOGIN_SUCCESS], authSuccess);
  yield fork(takeEvery, [USER_LOGOUT], logout);
  yield fork(takeEvery, [USER_REGISTER_SUCCESS], afterRegister);
}
