<template>
  <div class="header">
    <Logo />
    <div class="menu">
      <BaseLink path="/login" linkText="Login" />
      <BaseLink v-if="!isLoggedIn" path="/signup" linkText="Signup" />
      <BaseLink v-if="isLoggedIn" path="/new-article" linkText="Create Article" />
      <!-- <Menu class="menu" :menuLinks="menuLinks"/>
      <LoginButton class="login-button"/> -->
    </div>
  </div>
</template>

<script>
import BaseLink from "./BaseLink.vue";
import Logo from "./Logo.vue";
import { mapGetters } from 'vuex';

export default {
  components: { BaseLink, Logo },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ])
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.menu {
  display: flex;
  width: 20%;
  justify-content: space-evenly;
}
</style>