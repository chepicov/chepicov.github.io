import { get } from '../api.client';

export function fetchCommit(name) {
  return get(`api/repos/${name}/commits`);
}
