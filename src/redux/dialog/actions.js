import {
  DIALOG_REGISTER,
  DIALOG_DESTROY,
  DIALOG_OPEN,
  DIALOG_CLOSE,
} from './action-types';

export const dialogRegister = data => ({
  type: DIALOG_REGISTER,
  payload: data,
});

export const dialogDestroy = data => ({
  type: DIALOG_DESTROY,
  payload: data,
});

export const dialogOpen = data => ({
  type: DIALOG_OPEN,
  payload: data,
});

export const dialogClose = data => ({
  type: DIALOG_CLOSE,
  payload: data,
});
