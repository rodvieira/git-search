import { createStore } from 'vuex';

export default createStore({
  state: {
    userParams: '',
    repoParams: '',
    user: {},
  },
  mutations: {
    SET_USERS_PARAMS(state, data) {
      state.userParams = data;
    },
    SET_REPO_PARAMS(state, data) {
      state.repoParams = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    setUserParams({ commit }, data) {
      commit('SET_USERS_PARAMS', data);
    },
    setRepoParams({ commit }, data) {
      commit('SET_REPO_PARAMS', data);
    },
    setUser({ commit }, data) {
      commit('SET_USER', data);
    },
  },
});
