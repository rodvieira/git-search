<template>
  <div class="wrapper-about">
    <span class="item-title">Bio</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla laoreet tincidunt erat ut dapibus.
      Sed vitae ante et dolor euismod fermentum eu vitae nunc.
      Sed eget massa ut eros condimentum tincidunt id quis enim.
      Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit.
      Nam ligula purus, volutpat at pellentesque vel,
      congue non purus. Phasellus quis ex dapibus,
      elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod.
      Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
    </p>
    <div class="item-infos">
      <img src="@/assets/icons/home.svg" alt="Home">
      <span class="item-title">San Francisco</span>
    </div>
    <div class="item-infos">
      <img src="@/assets/icons/computer.svg" alt="Computer">
      <span class="item-title">https://fulano.com</span>
    </div>
  </div>
</template>
<script>

export default {
};
</script>

<style lang="scss" scoped>
  .wrapper-about {
    text-align: left;

    .item-title {
      color: #162668;
      font-size: 16px;
      font-weight: 600;

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
