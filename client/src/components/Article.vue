<template>
<div class="container">
  <h1>{{article.title}}</h1>
  <div class="details">
    <div>{{article.author_full_name}}</div>
    <!-- <div>{{article.date}}</div> -->
    <div><b>{{formatedDate}}</b></div>
    <div>views: {{article.views}}</div>
  </div>
  <h2 v-if="article.subtitle">{{article.subtitle}}</h2>
  <div v-if="article.article_image">
    <img :src=imgUrl alt="article image" >
    <!-- <img :src=["http://localhost:4000/"+ this.article.article_image] alt="" srcset=""> -->
  </div>
  <div class="description">{{article.description}}</div>
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
  computed: {
    imgUrl() {
      return "http://localhost:4000/" + this.article.article_image 
    },
    formatedDate() {
      return new Date(this.article.date).toLocaleDateString();
    }
  },
  mounted() {
    console.log("article: ",this.article)
  }
};
</script>

<style lang="scss" scoped>
  .container {
    padding: 2rem 1.5rem;
  }
  .details {
    /* display: flex;
    flex-direction: column; */
    width: fit-content;
  }
  .description {
    padding: 2rem 6rem;
  }
</style>