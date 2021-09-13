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
              style="display: none" 
              type="file"
              id="image"
              name="image"
              value=""
              @change="onFiledSelected"
              ref="fileInput"
            />
            <button @click="$refs.fileInput.click()">Pick Image</button>
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
              min="2020-01-01"
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
      publishedDate: "",
      selectedFile: null
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
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('subtitle', this.subtitle);
      formData.append('description', this.description);
      formData.append('date', this.publishedDate);
      formData.append('author_id', this.authorId);
      formData.append('author_full_name', this.authorFullName);
      formData.append('article_image', this.selectedFile, this.selectedFile.name);

      const result = await api.createArticle(formData);
      if (result) this.$router.push("/");

    },
    onFiledSelected(event) {
      this.selectedFile = event.target.files[0];
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
