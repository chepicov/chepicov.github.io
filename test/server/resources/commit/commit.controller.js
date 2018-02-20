const fetch = require('node-fetch');

module.exports.getCommitsByRepoId = async (ctx) => {
  const repoName = ctx.params.name;
  const res = await fetch(`https://api.github.com/repos/facebook/${repoName}/commits?page=1&per_page=100`, {
    headers: {
      'user-agent': 'node.js',
    },
  });
  const parsedRes = await res.json();
  ctx.body = parsedRes;
};
