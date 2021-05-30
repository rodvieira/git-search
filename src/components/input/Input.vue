<template>
  <div class="wrapper-input">
    <input
      type="text"
      :placeholder="placeholder"
      :class="{'filter': actionType === 'filter' }"
      @input="onInput"
    />
  </div>
</template>
<script>
export default {
  props: {
    placeholder: String,
    actionType: String,
  },
  methods: {
    onInput(event) {
      this.$emit('input-value', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-input {
    width: 100%;

    input {
      width: 100%;
      font-size: 15px;
      background-color: #fff;
      font-weight: 600;

      &:not(.filter) {
        border: 1px solid #90A4AE;
        padding: 4px 6px;
        border-radius: 4px;
        height: 30px;
        margin-bottom: 18px;
      }

      &.filter {
        padding: 8px 16px 8px 40px;
        height: 35px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        border: none;
        background-image: url('../../assets/icons/search.svg');
        background-repeat: no-repeat;
        background-position: 10px center;
      }
    }
  }
</style>
