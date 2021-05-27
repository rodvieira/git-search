<template>
  <button :class="{'green': bgColor === 'green'}">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    size: String,
    bgColor: String,
  },
};
</script>

<style lang="scss">
  button {
    max-width: 125px;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    background-color: #344FA5;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    &.green {
      background-color: #6FCF97;
    }
  }
</style>
