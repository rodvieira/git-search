<template>
  <div class="wrapper-item-project">
    <div class="info-project">
      <h4>{{project.name}}</h4>
      <p>{{project.description}}</p>
    </div>
    <div class="item-project-footer">
      <div class="info-lang" v-if="project.language">
        <div class="lang"></div>
        <span>{{project.language}}</span>
      </div>
      <span>Atualizado em {{updateProject}}</span>
    </div>
  </div>
</template>
<script>
import formatDate from '../../utils/formatDate';

export default {

  props: {
    project: Object,
  },
  computed: {
    updateProject() {
      return formatDate(this.project.updated_at);
    },
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

    .info-lang {
      display: flex;
      align-items: center;

      .lang {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #31BD00;
      }

      span {
        margin-left: 4px;
      }
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

    @media (min-width: 768px) {
      display: flex;
      padding: 10px;

      .info-project {
        max-width: 75%;
      }

      .item-project-footer {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 0;

        .info-lang {
          margin-bottom: 8px;
        }
      }
    }

  }
</style>
