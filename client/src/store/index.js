import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    authorId: "",
    authorFullName: "",
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setAuthorId(state, payload) {
      state.authorId = payload;
    },
    setAuthorFullName(state, payload) {
      state.authorFullName = payload;
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    authorId: (state) => {
      return state.authorId;
    },
    authorFullName: (state) => {
      return state.authorFullName;
    },
  },
  actions: {},
  modules: {},
});
