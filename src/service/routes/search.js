import api from '../axios/http-client';

export default {
  search: (params, id) => api.get('search/users', { ...params }, id),
};
