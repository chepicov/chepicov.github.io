import * as repositoryItemApi from './repository.api.js';

export const fetchRepository = () => (dispatch) => {
  return repositoryItemApi.fetchRepository()
    .then(repositories => dispatch({ type: 'fetchRepositories', repositories }));
};
