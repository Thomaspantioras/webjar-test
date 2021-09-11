<template>
<div>
  <h1>{{article.title}}</h1>
  <div class="details">
    <div>{{article.author}}author</div>
    <div>{{article.date}}</div>
    <div>views: {{article.views}}</div>
  </div>
  <h2 v-if="article.subtitle">{{article.subtitle}}</h2>
  <div v-if="article.image">image</div>
  <div>{{article.description}}</div>
  <hr>
</div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    // console.log("article: ",this.article)
  }
};
</script>

<style lang="scss" scoped>
  .details {
    display: flex;
  }
</style>