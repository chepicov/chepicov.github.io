const fetch = require('node-fetch');

module.exports.getAllRepos = async function getAllRepos(ctx) {
  const res = await fetch('https://api.github.com/users/facebook/repos',{ 
    headers: {'user-agent': 'node.js'},
  });
  const parsedRes = await res.json();
  ctx.body = parsedRes;
}
