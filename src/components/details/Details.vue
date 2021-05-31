<template>
  <div class="wrapper-details">
    <img :src="require(`@/assets/icons/${icon}`)" alt="Icone detalhe" />
    <span>
      {{quantity}}
    </span>
    <h6>{{title}}</h6>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
    quantity: Number,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-details {
    color: #162668;
    font-weight: 600;
    display: inline-block;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
    }

    span {
      font-size: 14px;
    }

    h6 {
      font-size: 14px;
      line-height: 20px;
      margin: 0;
    }

    @media (min-width: 768px) {
      margin: 4px 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
