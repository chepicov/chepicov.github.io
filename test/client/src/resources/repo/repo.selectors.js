export default {
  getRepos: (state) => {
    return state.repo ? state.repo.repos
      : [{
        repos: [],
      }];
  },
};
