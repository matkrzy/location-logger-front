import { TOGGLE_MENU } from './action-types';

const initState = {
  isOpen: true,
};

export const menuReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return {
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
