<template>
  <div>
    <div
      v-for="(article, index) in articles"
      :key="index"
    >
      <Article :article="article"/>
    </div>

  </div>
</template>

<script>
import Article from "./Article.vue";
export default {
  components: { Article },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log("articles: ",this.articles)
  }
};
</script>

<style lang="scss" scoped>
</style>