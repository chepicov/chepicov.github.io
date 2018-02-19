import * as commitListApi from './commit.api.js';

export const fetchCommit = id => (dispatch) => {
  return commitListApi.fetchCommit(id)
    .then(commits => dispatch({ type: 'fetchCommits', commits }));
};
