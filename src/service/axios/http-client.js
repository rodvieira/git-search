import http from './create-axios';

export default {
  get: (route, params, id, headers) => (id
    ? http.get(`${route}/${id}`, { params: { ...params } })
    : http.get(route, { params: { ...params } }, { headers: { ...headers } })),
  put: (route, data, params) => http.put(route, data, { params: { ...params } }),
  post: (route, data, params) => http.post(route, data, { params: { ...params } }),
  delete: (route, data) => http.delete(route, data),
};
