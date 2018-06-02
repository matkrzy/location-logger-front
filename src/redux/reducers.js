import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './auth/reducers';
import { menuReducer } from './menu/reducers';
import { dialogReducer } from './dialog/reducers';
import { tracksReducer } from './tracks/reducer';
import { trackReducer } from './track/reducer';
import { devicesReducer } from './devices/reducer';
import { notificationsReducer } from './notifications/reducer';

export const reducers = combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer,
  menu: menuReducer,
  dialog: dialogReducer,
  tracks: tracksReducer,
  track: trackReducer,
  devices: devicesReducer,
  notifications: notificationsReducer,
});
