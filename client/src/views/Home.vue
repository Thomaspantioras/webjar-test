<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    List of Articles
    <ArticlesList :articles="articles"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ArticlesList from "../components/ArticlesList.vue";
import { api } from '../helpers/api';

export default {
  name: "Home",
  components: {
    ArticlesList,
    // HelloWorld,
  },
  data() {
    return {
      articles: [],
      articlesById: []
    };
  },
  async mounted() {
    this.articles = await api.getArticles();
    this.articlesById = await api.getArticlesByAuthorId("613b8946b960a236a9064727");
  }
};
</script>


