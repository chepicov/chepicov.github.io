function buildUrl(path) {
  return `http://localhost:3000/${path}`;
}

const getJsonHeaders = () => ({
  Accept: 'application/json',
});

const responseHandler = (response) => {
  const result = response.json().then((res) => {
    return res;
  });

  return result;
};

export function get(path, queryStringObject) {
  return fetch(buildUrl(path, queryStringObject), {
    headers: getJsonHeaders(),
  })
    .then(responseHandler);
}

