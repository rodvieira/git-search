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
    margin: 0;
    outline: 0;
  }

  img {
    display: block;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555;
    background-color: #fff;
  }
</style>
