<template>
  <div class="wrapper-about">
    <span class="item-title">Bio</span>
    <p>{{user.bio}}</p>
    <div class="item-infos">
      <img src="@/assets/icons/home.svg" alt="Home">
      <span class="item-title">{{user.location}}</span>
    </div>
    <div class="item-infos">
      <img src="@/assets/icons/computer.svg" alt="Computer">
      <span class="item-title">{{user.company}}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-about {
    text-align: left;

    .item-title {
      color: #162668;
      font-size: 16px;
      font-weight: 600;
      word-break: break-all;

      &:first-child {
        font-size: 18px;
      }
    }

    p {
      font-family: Montserrat;
      font-size: 16px;
      line-height: 22px;
      margin: 14px 0;
    }

    .item-infos {
      display: flex;
      align-items: center;
      margin-bottom: 14px;

      img {
        margin-right: 14px;
      }
    }
  }
</style>
