<template>
  <div>
    <form action="action_page.php">
      <div>
        <h1>Create an Article</h1>
        <p>Please fill in this form to create an artcle.</p>
        <div class="fields-container">
          <div class="field">
            <label for="title"><b>Title</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="field">
            <label for="description"><b>Description</b></label>
            <textarea
              id="description"
              name="description"
              placeholder="Type description here"
              rows="10"
              required
            ></textarea>
          </div>
          <div class="field">
            <label for="writing_date"><b>Writing date</b></label>

            <input
              type="date"
              id="writing_date"
              name="writing_date"
              min="2021-01-01"
              max="2031-12-31"
            />
          </div>
        </div>
        <button type="submit" class="create_btn">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fields-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  justify-content: space-evenly;
  height: 25vh;
}
.field {
  display: flex;
  justify-content: space-between;
}
label {
  margin-right: 1rem;
}
</style>
