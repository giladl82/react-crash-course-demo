import { LOAD_OWNER_SUCCESS } from './action-types';

export const reducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_OWNER_SUCCESS:
      return action.owner;
    default:
      return state;
  }
}