<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    List of Articles
    <ArticlesList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ArticlesList from "../components/ArticlesList.vue";

export default {
  name: "Home",
  components: {
    ArticlesList,
    // HelloWorld,
  },
};
</script>


