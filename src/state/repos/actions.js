import { LOAD_REPOS_SUCCESS } from './action-types';

const loadReposSuccess = repos => ({
  type: LOAD_REPOS_SUCCESS,
  repos
})


export const loadRepos = (url) => (dispatch, getState) => {
  fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadReposSuccess(json)));
}