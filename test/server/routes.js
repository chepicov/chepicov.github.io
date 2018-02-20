const mount = require('koa-mount');
const repoResource = require('./resources/repo/public');
const commitResource = require('./resources/commit/public');

module.exports = (app) => {
  app.use(mount('/api/repos', repoResource));
  app.use(mount('/api/repos', commitResource));
};
