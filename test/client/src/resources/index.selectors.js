import fromRepository from './repository/repository.selectors.js';
import fromCommit from './commit/commit.selectors.js';

export default {
  ...fromRepository,
  ...fromCommit,
};
