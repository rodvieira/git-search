<template>
  <navbar />
  <router-view />
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
  * {
    font-family: 'Montserrat', sans-serif !important;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    margin: 0;

    img {
      display: block;
    }
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555;
    background-color: #fff;
    display: flex;
    min-height: 100%;
    min-width: 100%;

    @media (min-width: 481px) {
      background-color: #F8FAFB;
    }
  }
</style>
