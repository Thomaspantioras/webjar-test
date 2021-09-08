<template>
  <div>
    <h1>Login page</h1>
    <form action="action_page.php" method="post">
      <div class="container">
        <div class="field">
          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="field">
          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>

        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
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
