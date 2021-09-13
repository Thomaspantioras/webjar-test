<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <div class="fields-container">
          <div class="field">
            <label for="name"><b>Name</b></label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              id="name"
              v-model="name"
              required
            />
          </div>
          <div class="field">
            <label for="surname"><b>Surname</b></label>
            <input
              type="text"
              placeholder="Enter surname"
              name="surname"
              id="surname"
              v-model="surname"
              required
            />
          </div>
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

          <div class="field">
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              v-model="pswRepeat"
              required
            />
          </div>
        </div>
        <button type="submit" class="registerbtn">Register</button>
      </div>


    </form>
  </div>
</template>

<script>
import { api } from '../helpers/api';

export default {
  // components: { BaseLink },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      pswRepeat: ""
    }
  },
  methods: {
    async onSubmit() {
      if(this.password === this.pswRepeat) {
        const body = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        }

        const author = await api.registerAuthor(body);
        if(author) {
          this.$router.push("/");
        }
      }else{
        console.log("Passwords do not match!")
      }
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
