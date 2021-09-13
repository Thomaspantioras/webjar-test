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
        <p v-if="message">{{message}}</p>
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
      email: "",
      password: "",
      message: ""
    }
  },
  methods: {
    async onSubmit() {

      const body = {
        email: this.email,
        password: this.password
      }

      try {
        const {name, surname, _id} = await api.loginAuthor(body);
        this.$store.commit('setIsLoggedIn', true);
        this.$store.commit('setAuthorFullName', name + " " + surname);
        this.$store.commit('setAuthorId', _id);
        this.$router.push("/");
      } catch (error) {
        this.message = "Invalid emali or password";
      }
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
