<template>
  <div class="wrapper-list-item-user">
    <avatar size="50px" :image="infoUser.avatar_url" />
    <h4>{{infoUser.login}}</h4>
  </div>
</template>
<script>
import Avatar from '@/components/avatar/Avatar.vue';

export default {
  props: {
    size: String,
    bgColor: String,
    infoUser: Object,
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-list-item-user {
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
    padding: 8px 0;

    &:last-child {
      border: none;
    }

    img {
      border-radius: 50%;
      max-width: 50px;
    }

    h4 {
      color: #162668;
      font-weight: 600;
      font-size: 15px;
      margin-left: 16px;
    }
  }
</style>
