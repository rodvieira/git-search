<template>
  <div class="wrapper-navbar" v-if="$route.name !== 'Search'">
    <div class="logo">
      <logo />
      <h1>GitSearch</h1>
    </div>
    <nav>
      <a @click="backRoute()">
        <img src="@/assets/icons/arrow-left.svg" alt="Voltar"/>
      </a>
      <h3>{{title}}</h3>
    </nav>
  </div>
</template>
<script>
import Logo from '../logo/Logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    title() {
      const titles = [
        { name: 'ListUsers', value: 'Lista de Usuários' },
        { name: 'Profile', value: 'Perfil' },
      ];
      const findTitle = titles.find((item) => item.name === this.$route.name);
      return findTitle ? findTitle.value : '';
    },
  },
  methods: {
    backRoute() {
      if (this.$route.name === 'ListUsers') this.$router.push({ path: '/' });
      else this.$router.push({ path: '/list' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-navbar {
    padding: 0 16px;

    .logo {
      display: none;
    }

    nav {
      width: 100%;
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #90A4AE;

      a {
        margin-right: 14px;
        cursor: pointer;
      }

      h3 {
        color: #263238;
        font-weight: 600;
        font-size: 14px;
        margin: 0;
      }
    }

    @media (min-width: 768px) {
      box-shadow: (0px 4px 5px rgba(0, 0, 0, 0.05));

      nav {
        display: none;
      }

      .logo {
        display: flex;
        align-items: center;
        max-width: 860px;
        padding: 0 24px;
        margin: 0 auto;

        img {
          max-width: 50px;
          margin-right: 4px;
        }

        h1 {
          font-weight: 600;
          font-size: 20px;
          color: #000;
        }
      }
    }

  }
</style>
