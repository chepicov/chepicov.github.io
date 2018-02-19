export default {
  getCommits: (state, repositoryId) => state.commits.commits
    .filter(commit => commit.repositoryId === repositoryId),
};
