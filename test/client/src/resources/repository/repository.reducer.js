export default (state = { repositories: [] }, action) => {
  switch (action.type) {
    case 'fetchRepositories': {
      return { ...state, repositories: action.repositories };
    }
    default:
      return state;
  }
};
