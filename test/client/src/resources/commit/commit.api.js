import { get } from '../api.client.js';

export function fetchCommit(id) {
  return get(`api/repositories/${id}/commits`);
}
