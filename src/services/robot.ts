import request from '@/utils/axios';

// get images lists all country
export async function getLists(params: any) {
  return request.post('/api/v1/data/list', Object.assign({}, params))
}

