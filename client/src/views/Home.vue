<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    List of Articles 
    <!-- <ArticlesList :articles="articles"/> -->
    <ArticlesList :articles="currentArticles"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ArticlesList from "../components/ArticlesList.vue";
import { api } from '../helpers/api';
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    ArticlesList,
    // HelloWorld,
  },
  // data() {
  //   return {
  //     articles: [],
  //   };
  // },
  async mounted() {
    const articles = await api.getArticles(this.currentPage);
    this.$store.commit('setCurrentArticles', articles);
    // this.articles = await api.getArticles(this.currentPage);
    // this.articlesById = await api.getArticlesByAuthorId("613b8946b960a236a9064727");
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'currentArticles'
    ]),
    // getArticles: async () => {
    // const articles = await api.getArticles(this.currentPage);
    //   return articles
    // }
  },
};
</script>


