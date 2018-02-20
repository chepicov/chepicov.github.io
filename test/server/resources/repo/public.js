const controller = require('./repo.controller');
const router = require('koa-router')();

router.get('/all', controller.getAllRepos);

module.exports = router.routes();
