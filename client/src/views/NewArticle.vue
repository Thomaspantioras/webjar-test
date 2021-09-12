<template>
  <div v-if="isLoggedIn">
    <form  @submit.prevent="onSubmit">
      <div>
        <h1>Create an Article</h1>
        <p>Please fill in this form to create an article.</p>
        <div class="fields-container">
          <div class="field">
            <label for="title"><b>Title</b></label>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              id="title"
              v-model="title"
              required
            />
          </div>
          <div class="field">
            <label for="image"><b>Upload Image</b></label>
            <input 
              type="file"
              id="image"
              name="image"
              value=""
            />
        </div>
          <div class="field">
            <label for="subtitle"><b>Subtitle</b></label>
            <input
              type="text"
              placeholder="Enter Subtitle"
              name="subtitle"
              id="subtitle"
              v-model="subtitle"
            />
          </div>
          <div class="field">
            <label for="description"><b>Description</b></label>
            <textarea
              id="description"
              name="description"
              v-model="description"
              placeholder="Type description here"
              rows="10"
              required
            ></textarea>
          </div>
          <div class="field">
            <label for="published_date"><b>Published date</b></label>
            <input
              type="date"
              id="published_date"
              name="published_date"
              v-model="publishedDate"
              min="2021-01-01"
              max="2031-12-31"
            />
          </div>
          
        </div>
        <button type="submit" class="create_btn">Create</button>
      </div>
    </form>
  </div>
  <div v-else>
    <h3>You have to logged in first</h3>
  </div>
</template>

<script>
import { api } from '../helpers/api';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: "",
      subtitle: "",
      description: "",
      publishedDate: ""
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'authorId',
      'authorFullName'
    ])
  },
  methods: {
    async onSubmit() {

      const body = {
        title: this.title,
        description: this.description,
        date: this.publishedDate,
        author_id: this.authorId,
        author_full_name: this.authorFullName
      }
      const result = await api.createArticle(body);
      // console.log("RESULT: ", result)
      if (result) this.$router.push("/");

    }
  },
};
</script>

<style lang="scss" scoped>
.fields-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  justify-content: space-evenly;
  height: 40vh;
}
.field {
  display: flex;
  justify-content: space-between;
}
label {
  margin-right: 1rem;
}
input[type="file"] {
  width: 55%;
}
</style>
