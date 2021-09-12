<template>
  <div>
    <h1>Login page</h1>
    <form @submit.prevent="onSubmit">
      <div class="container">
        <div class="field">
          <label for="email"><b>Email</b></label>
          <input
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
              v-model="email"
              required
            />
        </div>
        <div class="field">
          <label for="psw"><b>Password</b></label>
          <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              v-model="password"
              required
            />
        </div>

        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { api } from '../helpers/api';
export default {
  data() {
    return {
      // loggedIn: false
      email: "",
      password: ""
    }
  },
  methods: {
    async onSubmit() {
   
        const body = {
          email: this.email,
          password: this.password
        }
          console.log("Im logIN!: ", body)

        await api.loginAuthor(body)
     
    }
  },
};
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
