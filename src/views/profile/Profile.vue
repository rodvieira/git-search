<template>
  <div class="wrapper-profile">
    <div class="header-profile">
      <avatar size="120px" class="avatar"/>
    </div>
    <div class="info-user">
      <h2>Julia Lopez</h2>
      <span>
        <img src="@/assets/icons/user.svg" alt="User" />
        julialopez
      </span>
    </div>
    <div class="details-profile">
      <details-profile
        icon="people-standing.svg"
        title="Seguindo"
        quantity="122"
      />
      <details-profile
        icon="path.svg"
        title="Projetos"
        quantity="31"
      />
      <details-profile
        icon="peoples.svg"
        title="Seguidores"
        quantity="44"
      />
    </div>
    <tabs
      :tabs="[
        {title: 'Sobre', content: 'sobre'},
        {title: 'Projetos', content: 'projetos'}
      ]"
    />

  </div>
</template>
<script>
import Avatar from '@/components/avatar/Avatar.vue';
import DetailsProfile from '@/components/details/Details.vue';
import Tabs from '@/components/tabs/Tabs.vue';

export default {
  name: 'Profile',
  components: {
    Avatar,
    DetailsProfile,
    Tabs,
  },

};
</script>
<style lang="scss">
  .wrapper-profile {
    padding: 0 20px;

    .header-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-image: url(../../assets/bg-profile.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding-top: 42px;
      margin: 0 -20px;

      .avatar {
        margin-bottom: -24px;
      }
    }

    .info-user {
      padding-top: 32px;

      h2 {
        font-weight: 600;
        font-size: 24px;
        color: #162668;
        margin-bottom: 4px;
      }

      span {
        color: #90A4AE;
        font-size: 16px;
        line-height: 22px;

        img {
          display: inline-block;
          margin-right: 4px;
        }
      }
    }

    .details-profile {
      margin: 28px 0;
      display: flex;
      justify-content: space-between;
    }

  }
</style>
