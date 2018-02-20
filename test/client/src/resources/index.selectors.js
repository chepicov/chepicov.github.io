import fromRepo from './repo/repo.selectors';
import fromCommit from './commit/commit.selectors';

export default {
  ...fromRepo,
  ...fromCommit,
};
