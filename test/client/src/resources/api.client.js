const url = 'http://localhost:3000';

function buildUrl(path) {
  return `${url}/${path}`;
}

const getJsonHeaders = () => ({
  Accept: 'application/json',
});

const responseHandler = (response) => {
  return Promise.resolve(response.json());
};

export function get(path, queryStringObject) {
  return fetch(buildUrl(path, queryStringObject), {
    headers: getJsonHeaders(),
  })
    .then(responseHandler);
}

