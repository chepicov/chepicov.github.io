export default (state = { repos: [] }, action) => {
  switch (action.type) {
    case 'fetchRepos': {
      return { ...state, repos: action.repos };
    }
    default:
      return state;
  }
};
