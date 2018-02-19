import { get } from '../api.client.js';

export function fetchRepository() {
  return get('api/repositories');
}
