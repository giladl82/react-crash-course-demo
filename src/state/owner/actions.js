import {LOAD_OWNER_SUCCESS} from './action-types'

const loadOwnerSuccess = owner => ({
  type: LOAD_OWNER_SUCCESS,
  owner
});

export const loadOwner = name => (dispatch, getState) => {
  return  fetch(`https://api.github.com/users/${name}`)
  .then(response => response.json())
  .then(json => dispatch(loadOwnerSuccess(json)));
}