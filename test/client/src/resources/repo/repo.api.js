import { get } from '../api.client';

export function fetchRepo() {
  return get('api/repos/all');
}
