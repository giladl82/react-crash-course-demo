import { LOAD_REPOS_SUCCESS } from './action-types';

export const reducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS:
      return action.repos;
    default:
      return state;
  }
}