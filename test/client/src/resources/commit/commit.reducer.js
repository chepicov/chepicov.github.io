export default (state = { commits: [] }, action) => {
  switch (action.type) {
    case 'fetchCommits': {
      const actionObj = action;
      actionObj.commits = action.commits.map(commit => ({ ...commit, repoName: action.name }));
      return { ...state, commits: action.commits };
    }
    default:
      return state;
  }
};
