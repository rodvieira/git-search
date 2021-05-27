<template>
  <img src="@/assets/icons/user-avatar.svg" alt="Avatar">
</template>
<script>
export default {
  props: {
    size: String,
    bgColor: String,
  },
};
</script>

<style lang="scss" scoped>
  img {
    border-radius: 50%;
    max-width: 50px;
  }
</style>
