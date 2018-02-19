const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/api/repositories'){ 
      fetch('https://api.github.com/users/facebook/repos',{ 
        headers: {'user-agent': 'node.js'},
      }).then((response) => {
        return response.json();
      }).then((obj) => {
        res.body = obj;
        res.end();
      });
    }
  }
});

server.listen(3000, err => {
  if (err) {
      return console.log('error ', err);
  }
});
