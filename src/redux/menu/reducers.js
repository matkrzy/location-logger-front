import { TOGGLE_MENU } from './action-types';

const initState = {
  open: true,
};

export const menuReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return {
        open: !state.open,
      };
    default:
      return state;
  }
};
