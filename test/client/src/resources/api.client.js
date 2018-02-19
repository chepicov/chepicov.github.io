function buildUrl(path) {
  return `http://localhost:3000/${path}`;
}

const getJsonHeaders = () => ({
  Accept: 'application/json',
});

const responseHandler = (response) => {
  if (response.status >= 500) {
    return response.text()
      .then(text => Promise.reject({ serverError: text }));
  }

  if (response.status >= 400) {
    const isJSON = response.headers.get('Content-Type').includes('application/json');

    if (isJSON) {
      return response.json()
        .then(data => Promise.reject({ ...data, isBadRequest: true }));
    }

    return response.text()
      .then(text => Promise.reject({ serverError: text }));
  }

  const res = Promise.resolve(response.json());
  console.log(res);
  return res;
};

export function get(path, queryStringObject) {
  return fetch(buildUrl(path, queryStringObject), {
    headers: getJsonHeaders(),
  })
    .then(responseHandler);
}

