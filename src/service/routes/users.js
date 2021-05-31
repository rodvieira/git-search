import api from '../axios/http-client';

export default {
  getUsers: (params, id) => api.get('users', { ...params }, id),
  getRepositories: (params, id) => api.get(`users/${id}/repos`, { ...params }),
};
