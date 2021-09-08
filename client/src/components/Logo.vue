<template>
  <div class="logo-container">
    <router-link to="/">
      <div class="text">WePost</div>
    </router-link>
    <!-- <img
      :src="image"
      alt="logo image"
      role="img"
    /> -->
  </div>
</template>

<script>
export default {
  props: {
    // image: {
    //   type: String,
    //   default: ""
    // }
  },
};
</script>

<style lang="scss" scoped>
/* @import "@/assets/css/eight_test.scss";
  .logo-container {
    max-width: 6.6em;
    @media screen and (min-width: $bp-sm) {
      max-width: 6.9em;
    }
  } */
.logo-container a {
  cursor: pointer;
  text-decoration: none;
}
.text {
  font-size: 40px;
}
</style>