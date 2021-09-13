<template>
  <div class="logo-container">
    <router-link to="/" >
      <div class="text" @click="getAllArticles">WePost</div>
    </router-link>
    <!-- <img
      :src="image"
      alt="logo image"
      role="img"
    /> -->
  </div>
</template>

<script>
import { api } from '../helpers/api';
export default {
  props: {
    // image: {
    //   type: String,
    //   default: ""
    // }
  },
  methods: {
    async getAllArticles() {
      this.$store.commit('setCurrentPage', 0);
      const articles = await api.getArticles(0);
      this.$store.commit('setCurrentArticles', articles);
      this.$store.commit('setShownArticlesByAuthor', false);
    }
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/css/eight_test.scss";
  .logo-container {
    max-width: 6.6em;
    @media screen and (min-width: $bp-sm) {
      max-width: 6.9em;
    }
  } */
.logo-container a {
  cursor: pointer;
  text-decoration: none;
}
.text {
  font-size: 35px;
}
</style>