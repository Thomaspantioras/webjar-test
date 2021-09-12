import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    loggedInAuthor: {
      authorId: "",
      fullName: "",
    },
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.loggedInAuthor = payload;
    },
    setLoggedInAuthor(state, payload) {
      state.loggedInAuthor = payload;
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    authorId: (state) => {
      return state.loggedInAuthor.authorId;
    },
    fullName: (state) => {
      return state.loggedInAuthor.fullName;
    },
  },
  actions: {},
  modules: {},
});
