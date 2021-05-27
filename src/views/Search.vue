<template>
  <div class="wrapper-home">
    <logo />
    <h1>GitSearch</h1>
    <div class="search">
      <search-input placeholder="Pesquisar..."/>
      <search-button>Ver Todos</search-button>
      <search-button bg-color="green" @click="$router.push({ path: 'list' })">Buscar</search-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import usersApi from '@/service/routes/users';
import Logo from '@/components/logo/Logo.vue';
import SearchButton from '@/components/button/Button.vue';
import SearchInput from '@/components/input/Input.vue';

export default {
  name: 'Search',
  components: {
    Logo,
    SearchButton,
    SearchInput,
  },
  methods: {
    fetchUsers() {
      usersApi.getUsers({}, 'rodvieira')
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
<style lang="scss">
  .wrapper-home {
    padding: 0 23px;
    margin-top: 65px;

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
