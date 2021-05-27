<template>
  <div class="wrapper-home">
    <logo />
    <h1>GitSearch</h1>
    <div class="search">
      <input type="text" placeholder="Pesquisar...">
      <button>Ver Todos</button>
      <button style="background: #6FCF97;">Buscar</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import usersApi from '@/service/routes/users';
import Logo from '@/components/logo/Logo.vue';

export default {
  name: 'Search',
  components: {
    Logo,
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

      input {
        border: 1px solid #90A4AE;
        padding: 4px 6px;
        border-radius: 4px;
        height: 30px;
        width: 100%;
        font-size: 15px;
        margin-bottom: 19px;
      }

      button {
        max-width: 125px;
        width: 100%;
        height: 50px;
        padding: 0 15px;
        background: #344FA5;
        border-radius: 4px;
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
      }
    }

  }
</style>
