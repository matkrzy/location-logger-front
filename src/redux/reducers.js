import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth/reducers';
import { menuReducer } from './menu/reducers';
import { dialogReducer } from './dialog/reducers';

export const reducers = combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer,
  menu: menuReducer,
  dialog: dialogReducer,
});
