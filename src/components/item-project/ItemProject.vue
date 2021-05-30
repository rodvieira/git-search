<template>
  <div class="wrapper-item-project">
    <h4>Projeto 01</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut ...
    </p>
    <div class="item-project-footer">
      <div class="lang"></div>
      <span>Atualizado em 18/12/2018</span>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    size: String,
    bgColor: String,
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-item-project {
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    h4 {
      font-weight: 600;
      font-size: 14px;
      color: #0366D6;
      margin: 0;
    }

    p {
      margin: 8px;
      font-weight: 600;
      font-size: 10px;
    }

    .lang {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #31BD00;
    }

    .item-project-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;

      span {
        font-weight: 600;
        font-size: 9px;
        color: #586069;
      }
    }
  }
</style>
