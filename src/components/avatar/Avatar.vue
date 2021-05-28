<template>
  <img :style="{ maxWidth: size }" src="@/assets/avatar.png" alt="Avatar">
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
  }
</style>
