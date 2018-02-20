const controller = require('./commit.controller');
const router = require('koa-router')();

router.get('/:name/commits', controller.getCommitsByRepoId);

module.exports = router.routes();
