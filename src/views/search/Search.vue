<template>
  <div class="wrapper-home">
    <logo />
    <h1>GitSearch</h1>
    <div class="search">
      <search-input
        placeholder="Pesquisar..."
        @input-value="value => querySearch = value"
      />
      <search-button @click="searchUsers('type:user')">Ver Todos</search-button>
      <search-button bg-color="green" @click="searchUsers(querySearch)">Buscar</search-button>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo/Logo.vue';
import SearchButton from '@/components/button/Button.vue';
import SearchInput from '@/components/input/Input.vue';

import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      querySearch: '',
    };
  },
  components: {
    Logo,
    SearchButton,
    SearchInput,
  },
  methods: {
    ...mapActions(['setUserParams']),
    searchUsers(query) {
      this.setUserParams(query);
      this.$router.push({ path: '/list' });
    },
  },
};
</script>
<style lang="scss" scoped>
  .wrapper-home {
    padding: 0 23px;
    max-width: 466px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;

    img {
      margin: 0 auto;
    }

    h1 {
      font-size: 30px;
      line-height: 22px;
      color: #000;
      margin: 37px 0px 54px;
    }

    .search {
      display: flex;
      flex-direction: column;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }

</style>
