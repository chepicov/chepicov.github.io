import * as repoItemApi from './repo.api';

export const fetchRepo = () => (dispatch) => {
  return repoItemApi.fetchRepo()
    .then(repos => dispatch({ type: 'fetchRepos', repos }));
};
