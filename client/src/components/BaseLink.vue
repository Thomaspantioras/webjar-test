<template>
  <div class="link-container">
    <!-- <a :href="path">{{ linkText }}</a> -->
    <router-link :to="path">{{ linkText }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.link-container a {
  cursor: pointer;
  text-decoration: none;
  font-size: 25px;
}

/* .link-container a::after {
  content: "";
  display: block;
  width: 0;
  height: 0.11em;
  transition: width 0.3s ease-out;
}

.link-container a:hover::after {
  width: 100%;
} */
</style>
