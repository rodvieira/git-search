<template>
  <span>
    {{
      itensLoaded > 0 ? `Todos os ${listName} carregados` : `Nenhum resultado encontrado`
    }}
  </span>
</template>
<script>
export default {
  props: {
    itensLoaded: Number,
    listName: String,
  },
};
</script>

<style lang="scss" scoped>
  span {
    padding: 4px 8px;
    color: #162668;
    font-weight: bold;
  }
</style>
