import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    authorId: "",
    authorFullName: "",
    currentPage: 0,
    currentArticles: [],
    shownArticlesByAuthor: false,
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
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setCurrentArticles(state, payload) {
      state.currentArticles = payload;
    },
    setShownArticlesByAuthor(state, payload) {
      state.shownArticlesByAuthor = payload;
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
    currentPage: (state) => {
      return state.currentPage;
    },
    currentArticles: (state) => {
      return state.currentArticles;
    },
    shownArticlesByAuthor: (state) => {
      return state.shownArticlesByAuthor;
    },
  },
  actions: {},
  modules: {},
});
