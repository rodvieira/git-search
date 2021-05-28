<template lang="html">
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
