import * as commitListApi from './commit.api';

export const fetchCommit = name => (dispatch) => {
  return commitListApi.fetchCommit(name)
    .then(commits => dispatch({ type: 'fetchCommits', commits }));
};
