<template>
<div class="container">
  <h1 class="title" @click="updateArticleViews">{{article.title}}</h1>
  <div class="details">
    <div class="author" @click="getArticlesByAuthor">
      <!-- <a href="#" class="previous" @click="previousArticles">&laquo; Previous</a> -->
      <b>{{article.author_full_name}}</b>
    </div>
    <!-- <div>{{article.date}}</div> -->
    <div>{{formatedDate}}</div>
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
import { api } from '../helpers/api';

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
    },
  },
  mounted() {
    console.log("article: ",this.article)
  },
  methods: {
    async getArticlesByAuthor() {
      const articles = await api.getArticlesByAuthorId(this.article.author_id);
      this.$store.commit('setCurrentArticles', articles);
      this.$store.commit('setShownArticlesByAuthor', true);
    },
    async updateArticleViews() {
      await api.updateArticleViews(this.article._id,{"views": this.article.views + 1});
    }
  },
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
  .title, .author {
    cursor: pointer;
  }
  .description {
    padding: 2rem 6rem;
  }
</style>