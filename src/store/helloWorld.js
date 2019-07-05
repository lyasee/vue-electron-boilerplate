export default {
  namespaced: true,

  state: {
    select: ""
  },

  getters: {
    select: state => state.select
  },

  mutations: {
    setSelect(state, payload) {
      state.select = payload;
    }
  },

  actions: {
    initialize({ dispatch }) {
      dispatch("refreshSelect", "init");
    },

    async refreshSelect({ commit }, data) {
      commit("setSelect", data);
    }
  }
};
