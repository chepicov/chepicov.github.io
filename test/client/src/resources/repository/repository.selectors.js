export default {
  getRepositories: state => state.repositories ? state.repositories.repositories : [{
    repositories: [],
  }],
};
