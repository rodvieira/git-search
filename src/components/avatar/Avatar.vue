<template>
  <img :style="{ maxWidth: size }" :src="image" alt="Avatar">
</template>
<script>
export default {
  props: {
    size: String,
    bgColor: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
  img {
    border-radius: 50%;
  }
</style>
