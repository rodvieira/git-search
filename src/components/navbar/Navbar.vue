<template>
  <div class="wrapper-navbar">
    <nav>
      <a @click="$router.back()">
        <img src="@/assets/icons/arrow-left.svg" alt="Voltar"/>
      </a>
      <h3>{{title}}</h3>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    title() {
      const titles = [{ name: 'ListUsers', value: 'Lista de Usuários' }];
      const findTitle = titles.find((item) => item.name === this.$route.name);
      return findTitle ? findTitle.value : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-navbar {
    padding: 0 16px;

    nav {
      width: 100%;
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #90A4AE;

      a {
        margin-right: 14px;
      }

      h3 {
        color: #263238;
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
</style>
