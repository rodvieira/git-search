<template>
  <div class="wrapper-list-users">
    <input-filter action-type="filter" />
    <div class="list-users">
      <list-item-user />
      <list-item-user />
      <list-item-user />
      <list-item-user />
    </div>
  </div>
</template>
<script>
import InputFilter from '@/components/input/Input.vue';
import ListItemUser from '@/components/list-item-user/ListItemUser.vue';

export default {
  name: 'ListUsers',
  components: {
    InputFilter,
    ListItemUser,
  },

};
</script>
<style lang="scss">
  .wrapper-list-users{
    padding: 0 16px;
    margin-top: 16px;

    .list-users {
      margin-top: 24px;
    }

  }
</style>
