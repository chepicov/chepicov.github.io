export default {
  getCommits: (state, name) => state.commit.commits
    .filter(commit => commit.repoName === name),
};
