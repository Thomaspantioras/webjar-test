<template>
  <div class="footer">
    <a href="#" class="previous" @click="previousArticles">&laquo; Previous</a>
    <a href="#" class="next" @click="nextArticles">Next &raquo;</a>
  </div>
</template>

<script>
import { api } from '../helpers/api';
import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        fArticles: []
      }
    },
    computed: {
    ...mapGetters([
      'currentPage'
    ]),
    // getArticles: async () => {
    // const articles = await api.getArticles(this.currentPage);
    //   return articles
    // }
  },
    methods: {
      async previousArticles() {
        if (this.currentPage) {
          const articles = await api.getArticles(this.currentPage - 1);
          this.$store.commit('setCurrentArticles', articles);
          this.$store.commit('setCurrentPage', this.currentPage - 1);
          // this.fArticles = await api.getArticles(this.currentPage - 1);
        }
        console.log("previ!!!")
      },
      async nextArticles() {
        const articles = await api.getArticles(this.currentPage + 1);
        this.$store.commit('setCurrentArticles', articles);
        this.$store.commit('setCurrentPage', this.currentPage + 1);
        console.log("nxt!!!")
      }
    },
  }
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;

  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous,.next{
  background-color: #f1f1f1;
  color: black;
}

</style>