<template>
  <input type="text" :placeholder="placeholder">
</template>
<script>
export default {
  props: {
    placeholder: String,
  },
};
</script>

<style style="scss">
  input {
    border: 1px solid #90A4AE;
    padding: 4px 6px;
    border-radius: 4px;
    height: 30px;
    width: 100%;
    font-size: 15px;
    margin-bottom: 19px;
    background-color: #fff ;
  }
</style>
