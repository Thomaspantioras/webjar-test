<template>
  <div class="header">
    <Logo />
    <div class="menu">
      <BaseLink path="/login" linkText="Login" />
      <BaseLink path="/signup" linkText="Signup" />
      <!-- <Menu class="menu" :menuLinks="menuLinks"/>
      <LoginButton class="login-button"/> -->
    </div>
  </div>
</template>

<script>
import BaseLink from "./BaseLink.vue";
import Logo from "./Logo.vue";
export default {
  components: { BaseLink, Logo },
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