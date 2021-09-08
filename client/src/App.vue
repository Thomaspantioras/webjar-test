<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <Header :menuLinks="menuLinks"/>
    <SliderBlock />
    <Services />
    <NewsLetter />
    <Footer :menuLinks="menuLinks"/> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Header from '@/components/Header.vue'
// import SliderBlock from '@/components/SliderBlock.vue'
// import Services from '@/components/Services.vue'
// import NewsLetter from '@/components/NewsLetter.vue'
// import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    // SliderBlock,
    // Services,
    // NewsLetter,
    // Footer
  },
  data: () => ({
    menuLinks: [
      {
        path: "/home",
        text: "Home",
      },
      {
        path: "/key-features",
        text: "Key Features",
      },
      {
        path: "/pricing",
        text: "Pricing",
      },
      {
        path: "/testimonial",
        text: "Testimonial",
      },
      {
        path: "/faq",
        text: "FAQ",
      },
    ],
  }),
};
</script>

<style>
#app {
  margin: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
