export default (state = { commits: [] }, action) => {
  switch (action.type) {
    case 'fetchCommits':
      return { ...state, commits: action.commits };
    default:
      return state;
  }
};
