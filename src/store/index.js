import { createStore } from 'vuex';

export default createStore({
  state: {
    searchParams: '',
  },
  mutations: {
    SET_SEARCH_PARAMS(state, data) {
      state.searchParams = data;
    },
  },
  actions: {
    setSearchParams({ commit }, data) {
      commit('SET_SEARCH_PARAMS', data);
    },
  },
});
