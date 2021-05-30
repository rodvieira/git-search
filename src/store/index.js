import { createStore } from 'vuex';

export default createStore({
  state: {
    searchParams: '',
    user: {},
  },
  mutations: {
    SET_SEARCH_PARAMS(state, data) {
      state.searchParams = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    setSearchParams({ commit }, data) {
      commit('SET_SEARCH_PARAMS', data);
    },
    setUser({ commit }, data) {
      commit('SET_USER', data);
    },
  },
});
